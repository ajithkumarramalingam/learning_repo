// var name1 = "Ajith";
// console.log('name 1`',name1);
// var name1 = "Kumar";
// console.log('name 2',name1);
// name1 = "Kalai"
// console.log('name 3',name1);

// let a = "Ram";
// console.log('a 1',a);
// a = "Mahes";
// console.log('a 2',a);

// if (true) {
//     let a = 10;
// }

// console.log(a);

// let id1 = Symbol("user");
// let id2 = Symbol("user");
// console.log('id1',id1);
// console.log('id2',id2);
// console.log('id1 === id2',id1 == id2);

const firstName = "Ajith";
const age = 25;
const toLeave = false;
const city = null;
let task;
const count = 334379437977643964368364743743n;
let sign = Symbol();

console.log('firstName, age, toLeave, city, task, count, sign',firstName, age, toLeave, city, task, count, sign);

console.log('Type of --- firstName, age, toLeave, city, task, count, sign',typeof(firstName), typeof(age), typeof(toLeave), typeof(city), typeof(task), typeof(count), typeof(sign));

const my_details = {
    name: "Kalai",
    age: 25,
    city: "Kumbakonam"
}

console.log('my_details',my_details);

const arr = [1, 2, 3, 4, 5];
console.log('arr',arr);

const a = null;
let b;
console.log('a',a);
console.log('b',b);

console.log('a == b',a == b);
console.log('a === b',a === b);

console.log("Check type of: a");
console.log(typeof(a));
console.log("Check type of: b");
console.log(typeof(b));

let n1 = 100;
let n2 = n1;

n2 = 200;

console.log('n1',n1);
console.log('n2',n2);

let obj1 = {
    sureName: "Ram",
    age: 25
};


let obj2 = obj1;

obj2.sureName = "Rasika";

console.log('obj1',obj1);
console.log('obj2',obj2);

let x = {
    value: 10
};

let y = x;

x = {
    value: 20
};

console.log("X value is", x.value);
console.log("Y value is", y.value);

let a1 = [1, 2];

let b1 = a1;

b1.push(3);

console.log(a1);
console.log(b1);


let a2 = [1, 2];

let b2 = a2;

b2 = [5, 6];

console.log(a2);
console.log(b2);

console.log(1 + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

console.log("5" + 2 + 3);
console.log(5 + 2 + "3");
console.log(5 + "2" + 3);
console.log(undefined + 1);
console.log(Number(" "));
console.log(parseInt("wwe325"));
console.log({});
console.log([] == false);
console.log("" == false);
console.log({} + []);
console.log('true+true',true+true);
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

if ("0") {
    console.log("YES");
} else {
    console.log("NO");
}

if (0) {
    console.log("YES");
} else {
    console.log("NO");
}

if ("") {
    console.log("YES");
} else {
    console.log("NO");
}

if ("false") {
    console.log("YES");
} else {
    console.log("NO");
}

if (NaN) {
    console.log("YES");
} else {
    console.log("NO");
}


console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(-1)); // true
console.log(Boolean(0n)); // false
console.log(Boolean("Ajith")); // true

console.log("Equality Operators: (== vs ===)")
console.log(5 == "5");
console.log(true == 1);
console.log(false == 0);
console.log(null == undefined);
console.log(NaN == NaN, typeof NaN);

console.log(0 === -0);

let userId = Symbol("user");
let userId1 = Symbol("user");
console.log('userId',userId);
console.log('userId1',userId1);
console.log('userId',userId === userId1);

console.log('Number',Number.MAX_SAFE_INTEGER);

let big = 100n;
let num = 10;

// console.log(big + num);
// ❌ ERROR! Cannot mix BigInt and normal number

// Fix — convert first
console.log(BigInt(num) + big);  // 110n ✅
console.log('type of {}',typeof null, typeof []);

console.log('Boolean([])',Boolean({}));
console.log('Boolean("")',Boolean(""));
console.log('Boolean("0")',Boolean("0"));
console.log('Boolean(undefined)',Boolean(undefined));
console.log('Boolean(null)',Boolean(null));

console.log(NaN === NaN);

console.log("Module - 2");
var s = 10;

console.log(s);

var s = 20;

console.log(s);

let z = 10;

console.log(z);

z = 20;

console.log(z);

var f;
console.log('f',f);
var f = 30;

