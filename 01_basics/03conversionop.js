// let score="33abc"

// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber= Number(score)
// console.log(typeof valueInNumber) //number but str=33abc
// console.log(valueInNumber) //NaN (not a number)

// //by use of Number
// //"33"=>33
// //"33abc"=> NaN
// //undefined=>NaN
// //true=>1;false=>0
// //null=>0

// let loggedin=1
// let isloggedin=Boolean(loggedin)
// console.log(isloggedin)

// //to 'Boolean' conversion
// //1=>true
// //0=>false
// //""=>false
// //"non empty string"=>true

// let somenumber=33
// let str=String(somenumber)
// console.log(typeof str) //string
// console.log(str)

// //*******************operations********************
// let str1="hello"
// let str2=" Dev"
// let str3=str1+str2 //hello Dev

// console.log(1+"2") //12
// console.log("1"+2)//12
// console.log(1+"2"+1) //121
// console.log(1+2+"2") //32
// console.log("1"+2+2) //122

// //**************comparison**************************/

// // "===" not only checks value is equal or not but also checks datatypes

// //confusing conversions should be avoided
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// //sometimes null is converted to number and sometimes NaN
// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)

// console.log("2"===2) //false (same value but diff datatype)

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid)
let ab=5// in case of "const" it can be reassigned again
ab=6
console.log(ab) 
const bigNumber=27873674868398n // automatically treated as bigint
console.log(typeof bigNumber)

//array,objects,functions
//array
const actors=["iron man","hulk","doctor strange"] 
//objects
let myobj={
    age: 20,
    name: "Dev",
}
//functions
const myfunction= function(){
    console.log("hello world");
}
//types of non primitive datatypes is object (for function ,it is object function/function)