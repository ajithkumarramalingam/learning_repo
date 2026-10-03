# Interview Revision Notes - Storage & Auth Flows

---

## PART 1: Cookie vs LocalStorage vs SessionStorage

### 1. Cookie

**What it is:** Chinna data, browser la store aagum, **automatic ah server ku ovvoru request kum anupudhu**.

| Feature | Detail |
|---|---|
| Expiry | Manual ah set pannalam (persist aagum) |
| Size | ~4KB |
| Sent to server? | Yes, every request |
| Scope | Same-origin, any tab |

**Real-time example:** Amazon "Remember Me" login. Checkbox click pannina, login info cookie ah store aagum, 30 days expiry set pannirupanga. 30 days varaikum browser open panna automatic login aagum. Ovvoru page visit pannum bothum, cookie automatic ah server ku pogum, server user ah recognize pannikum.

**Other examples:** Flipkart "recently viewed", Google Ads tracking, banking session cookies.

---

### 2. Local Storage

**What it is:** Data browser la store aagum, **expiry illa** - manual ah clear pannura varaikum irukkum. Server ku automatic ah anupathu.

| Feature | Detail |
|---|---|
| Expiry | Never (manual clear varaikum) |
| Size | ~5-10MB |
| Sent to server? | No |
| Scope | Same-origin, any tab |

**Real-time example:** YouTube Dark Mode. Settings la dark theme select pannina, localStorage la save aagum. Browser close pannitu next day open pannalum, dark mode andha madhiri irukum.

**Other examples:** Flipkart cart items (login pannama kooda persist aagum), Figma/Canva unsaved drafts.

---

### 3. Session Storage

**What it is:** LocalStorage madhiri than, aana **tab close pannina data poyidum**.

| Feature | Detail |
|---|---|
| Expiry | Tab close aana clear aagum |
| Size | ~5MB |
| Sent to server? | No |
| Scope | Same tab only |

**Real-time example:** Multi-step form (IRCTC ticket booking, job application). Step 1 fill pannitu next click panna, data sessionStorage la temporary save aagum. Tab close pannina, ella data um poyidum - thirumba first step la irundhu start pananum.

---

### Quick Comparison Table

| | Cookie | LocalStorage | SessionStorage |
|---|---|---|---|
| Expiry | Manual set | Never | Tab close aana |
| Size | 4KB | 5-10MB | 5MB |
| Server ku pogumaa | Yes | No | No |
| Real example | Remember Me login | Dark mode, cart | Multi-step form |

---

## PART 2: Login Flow (Full, Step-by-Step)

**Real-time example: Bank/E-commerce app login**

```
STEP 1: FE - User email + password enter pandran

STEP 2: FE -> BE
        POST /api/login
        Body: { email, password }

STEP 3: BE - Email vachi DB la user ah find pandran

STEP 4: BE - User illainaa -> "Invalid credentials" (generic error, 
        email exist nu reveal pannakoodathu)

STEP 5: BE - Password check - bcrypt.compare(enteredPassword, user.hashedPassword)
        (DB la password already HASHED ah than store aagi irukum, signup time)
        Match illainaa -> "Invalid credentials"

STEP 6: BE - Password match aana, JWT generate pandran
        accessToken  -> expiresIn: 15m (short - security)
        refreshToken -> expiresIn: 7d  (long - re-login avoid panna)

STEP 7: BE -> FE - Token httpOnly cookie ah set pandran
        res.cookie('accessToken', token, {
          httpOnly: true,   // JS access panna mudiyathu - XSS safe
          secure: true,     // HTTPS mattum
          sameSite: 'strict'
        })

STEP 8: FE - Cookie automatic ah browser store pandrathu 
        (localStorage.setItem needed illa - httpOnly cookie safer)

STEP 9: FE - Dashboard ku redirect pandran

STEP 10: Future la protected API call pannum bothum, cookie automatic ah 
         request kooda pogum
```

**Why httpOnly cookie, not localStorage:** XSS attack la (malicious script inject aana), localStorage.getItem("token") easy ah read panna mudiyum. httpOnly cookie na, JavaScript andha cookie ah access panna mudiyathu - safe.

---

## PART 3: Logout Flow (Full, Step-by-Step)

**Real-time example: Yes Bank / IRIS app logout (manual or session timeout)**

```
STEP 1: FE - "Logout" button click OR idle timeout (5 mins inactivity)

STEP 2: FE -> BE
        POST /api/logout

STEP 3: BE - Current accessToken ah BLACKLIST la add pandran (Redis)
        - Token decode pannitu expiry time edukanum
        - remainingSeconds = tokenExpiry - currentTime
        - Redis: SET blacklist:<token> true EX remainingSeconds

STEP 4: BE - Cookies clear pandran
        res.clearCookie('accessToken')
        res.clearCookie('refreshToken')

STEP 5: FE - Login page ku redirect

STEP 6: (Security) - Yaravadhu old token vachi (steal pannirundha) API call 
        pannina, BE Redis check pannitu 401 return pannum, 
        even token JWT-ah expire aagalanalum
```

**Why blacklist needed:** JWT token expiry varaikum "valid" ah than irukum by default - server ku "cancel pannu" nu direct ah sollamudiyathu. So logout pannina udane, Redis la "blacklist" nu mark pannuvom.

**Why Redis (not normal DB table):** Every single request kum "token blacklist la irukka" nu check pannanum. Redis RAM la irukurathala super fast. Normal DB (disk) la query panna slow, app mottama slow aagidum. Redis oda `EX` (expiry) option vachi, token expire aagura time varaikum mattum store pannalam - apparam automatic ah delete aagidum, manual cleanup venam.

---

## PART 4: Access Token vs Refresh Token - Epdi Vela Seiyum

```
Access token  -> EVERY protected API request kooda pogum (cookie automatic)
Refresh token -> ONLY /api/refresh-token endpoint ku mattum pogum
```

**Purpose:** User ah baar baar login pannachu vaikama, seamless ah session continue pannuradhukku.

- Access token 15 mins la expire aagum
- FE automatic ah (background la) refresh token vachi new access token vaangikum
- User ku edhuvum theriyathu, interrupt aagathu
- Refresh token 7 days expire aana mattum, thirumba login pannanum

**Analogy:** Access token = movie ticket (short time, oru show ku mattum). Refresh token = season pass (adha vachi puthu ticket edukalam).

### Refresh API Flow (Automatic - Axios Interceptor)

```
1. User "Get Profile" click pandran
2. FE -> BE: GET /api/profile (accessToken cookie automatic ah pogum)
3. Access token expired -> BE returns 401
4. FE interceptor 401 ah catch pannum
5. FE automatic ah -> POST /api/refresh-token (refreshToken cookie automatic ah pogum)
6. BE - refreshToken verify pannum, DB la stored refreshToken oda match check pannum
7. BE - new accessToken generate pannitu cookie set pannum
8. FE - original request (GET /api/profile) thirumba automatic ah try pannum
9. Success response varum - user ku edhuvum theriyama background la nadanthurum
```

---

## PART 5: Forgot Password Flow (Full, Step-by-Step)

**Real-time example: Any app "Forgot Password" link**

```
STEP 1: FE - "Forgot Password" click, email enter pandran

STEP 2: FE -> BE
        POST /api/forgot-password
        Body: { email }

STEP 3: BE - Email DB la irukka nu check pandran
        SECURITY RULE: Email exist pannuthu illaiya nu reveal pannakoodathu
        (illainaa attacker "user enumeration attack" pannalam - try pannitu 
        edhavadhu email exist pannuthu nu figure out pannalam)
        
        Rendu case layum (exist / not exist) - SAME generic message:
        "If this email is registered, a reset link has been sent."

STEP 4: BE - (Email exist na mattum internal ah) Random secure token generate
        resetToken = crypto.randomBytes(32)        <- PLAIN version
        hashedToken = bcrypt.hash(resetToken)       <- HASHED version

STEP 5: BE - DB la HASHED token + expiry(15 mins) store pandran
        user.resetToken = hashedToken
        user.resetTokenExpiry = now + 15 mins

STEP 6: BE - PLAIN token vachi email link generate pannitu anupran
        Link: https://yourapp.com/reset-password?token=<PLAIN resetToken>
        
        WHY PLAIN in email, HASHED in DB (same logic as password hashing):
        - DB hack aana, attacker plain token paakka koodathu (safety)
        - User click pannum bothu, URL la irukura PLAIN token backend ku pogum
        - Backend andha plain token ah bcrypt.compare() panni, DB la irukura 
          HASHED version oda match aaguthaa check pannum

STEP 7: FE - User email open pannitu link click, new password form varum

STEP 8: FE -> BE
        POST /api/reset-password
        Body: { token (plain, from URL), newPassword }

STEP 9: BE - Token expiry check
        now > resetTokenExpiry -> "Link expired" error

STEP 10: BE - Token match check
        bcrypt.compare(receivedPlainToken, user.hashedResetToken)
        Match illainaa -> "Invalid token" error

STEP 11: BE - New password update pandran
        user.password = bcrypt.hash(newPassword)   <- new password hash pannitu store
        user.resetToken = null                       <- ONE-TIME USE, clear pannanum
        user.resetTokenExpiry = null                 <- clear pannanum
        
        WHY null pannanum: Null pannalana, same reset link (email history la 
        saved irundha) thirumba use panna mudiyum, already password reset 
        aagirundhalum. Null pannitangana, bcrypt.compare() fail aagum - 
        same link rendaam thadava use panna mudiyathu.

STEP 12: FE - "Password reset successful" - login page ku redirect
```

---

## Master Summary Table

| Flow | Key Security Points |
|---|---|
| **Login** | bcrypt password compare, JWT (short access + long refresh), httpOnly cookie |
| **Logout** | Redis blacklist (not just frontend token remove), cookie clear |
| **Refresh Token** | Separate endpoint, only pogum for /refresh-token call, automatic via interceptor |
| **Forgot Password** | Generic message (no user enumeration), plain-in-email + hashed-in-DB token, one-time use (null after reset) |

---

## Interview One-Liners (Quick Recall)

> **Login:** "Backend verifies credentials using bcrypt, generates a short-lived access token and long-lived refresh token, and sends them as httpOnly cookies to protect against XSS."

> **Logout:** "We blacklist the access token in Redis with an expiry matching its remaining JWT lifetime, so even a stolen token becomes unusable immediately after logout."

> **Refresh Token:** "The refresh token only hits a dedicated /refresh-token endpoint. When the access token expires, an Axios interceptor catches the 401, silently calls refresh, and retries the original request — the user never notices."

> **Forgot Password:** "We generate a cryptographically random token, email the plain version, but store only its bcrypt hash in the DB with a 15-minute expiry, and null it out after use so the link can't be reused."