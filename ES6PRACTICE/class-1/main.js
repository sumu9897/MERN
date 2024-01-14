// JavaScript Strict Mode


/*"use strict"
var x=3.14
console.log(x);*/



//let and const for Variable Declaration

/*let a=10;
a=20;
console.log(a);*/






//Arrow Functions

/*function MyFun(a,b){
    return a+b;
}

const MyFunArrow=(a,b)=>a+b

console.log(MyFunArrow(3,4))*/


//Template Literals
/*
let MyAge=33;
// let MySelf ="My Age is "+MyAge;
// console.log(MySelf)


let MySelf = `My Age is ${MyAge}`
console.log(MySelf)




*/






//Array Destructuring

// const arr=[1,2,3];

// const [a,b,c]=arr
// console.log(a+b);


//Object Destructuring

/*const person={
    name:'Jhon',
    age:24,
    city:"Dhaka"
}

const {name,age,city} =person;
console.log(city);
console.log(age+10);

*/

//Nested Destructuring



const user={
    name:"Bob",
    age:30,
    parent:{
        father:"Jack",
        mother:"Rose"
    }
}


const {name,age,parent}=user;
console.log(parent.father); //Object Inside The Code

console.log(parent['mother']); // Third Party Object Fatching...