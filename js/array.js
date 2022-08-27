let arr = new Array("one","two","three");
// console.log(arr);

let fruits=["apple","orange",12,"25",true,"mango","peach"];
// console.log(fruits);

//pure function
// inpure function

// console.log(fruits.length);
// console.log(fruits[1]);

// console.log(fruits.push("strawberry"));
// fruits.push("pieapple");
// console.log(fruits);
// console.log(fruits.unshift("watermalon"));

// fruits.pop();
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits.shift());

console.log(fruits.slice(2,5));
console.log(fruits);

console.log(fruits.splice(2,4));
console.log(fruits);

fruits.sort();
console.log(fruits);

let numbers=["a",10,1,22,100,"b"];
console.log(numbers);
numbers.sort();
console.log(numbers);

// static Method
// public Method

console.log(Array.isArray(numbers));
let str="Hello";
console.log(Array.isArray(str));

console.log(typeof numbers);

numbers[1]='ten';
console.log(numbers);

numbers[9]='hello';
console.log(numbers);

let lang1=["html", "css"];
let lang2=['php', 'js', 'react'];

// spread operator
let result=[lang1, lang2]
result =[...lang1,...lang2];
// result=[lang1+','+lang2];
console.log(result);

// destructuring
console.log(result[0]);
[a1,a2,a3,a4,a5]=result;
console.log(a1);