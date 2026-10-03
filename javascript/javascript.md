1. Variables:-
javascript has 3 ways to declare variables.

var name = "Ajith";
let age = 24;
const city = "Chennai";

2. Var:
var is function-scoped, can be redeclared, and can be reassigned.

3. let:
let is block-scoped, cannot be redeclared in the same scope, but can be reassigned.

4. const:
const is block-scoped, cannot be redeclared or reassigned after initialization.

5. Javascript data types:
javascript has 2 categories.

Primitive Data Types(Stored by Value)
* string
* number
* boolean
* null
* undefined
* symbol
* bigint

Non-Primitive(Reference Type)
* object
* array
* function
* date
* regexp

6. NUll:
Answer: Null means an intentional empty value

7. Difference Between null and undefined:
| undefined                          | null                                |
| ---------------------------------- | ----------------------------------- |
| Variable declared but not assigned | Variable intentionally set to empty |
| Automatic                          | Assigned by programmer              |

8. Symbol:
A symbol creates a unique value.

9. Bigint and Normal number:
Normal number → max 16 digits safe. cross 16 digits → wrong answer
BigInt → unlimited digits. just add 'n' at end → always correct

10. console.log(typeof null); output is object
Why?

This is a historical bug in JavaScript.

null is not an object, but typeof null returns "object" for backward compatibility. This behavior has remained because changing it would break existing code.

11. Difference between primitive and non-primitive?

Primitive: Stored by value.
Non-primitive: Stored by reference.

12. Why does typeof null return "object"?
Answer: It's a historical bug in JavaScript that has been preserved for backward compatibility.

13. Is an array an object?
Answer: Yes. typeof [] returns "object". To specifically check for an array, use Array.isArray().

14. Number() converts the entire string to a number. If any invalid character exists, it returns NaN.

15. parseInt() reads from the beginning of the string and stops when it encounters a non-numeric character.

16. Equality (==):

Different rules apply.

null == undefined

↓

true

This is a special equality rule—not number conversion.

17. NaN == NaN
JavaScript designers decided:

A value representing an invalid number should never equal any value, including itself.

18. What JavaScript actually does

Before executing your code, JavaScript makes two passes.
Phase 1 - Memory Creation Phase
Phase 2 - Execution Phase

19. 
Math.floor(4.7)	4	Always rounds down
Math.ceil(4.7)	5	Always rounds up
Math.round(4.7)	5	Rounds to nearest (4.5+ rounds up)
Math.trunc(4.7)	4	Just removes decimal (no rounding logic)

20. 
