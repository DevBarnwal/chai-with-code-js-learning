let score="33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber= Number(score)
console.log(typeof valueInNumber) //number but str=33abc
console.log(valueInNumber) //NaN (not a number)

//by use of Number
//"33"=>33
//"33abc"=> NaN
//undefined=>NaN
//true=>1;false=>0
//null=>0

let loggedin=1
let isloggedin=Boolean(loggedin)
console.log(isloggedin)

//to 'Boolean' conversion
//1=>true
//0=>false
//""=>false
//"non empty string"=>true

let somenumber=33
let str=String(somenumber)
console.log(typeof str) //string
console.log(str)

//*******************operations********************
let str1="hello"
let str2=" Dev"
let str3=str1+str2 //hello Dev

console.log(1+"2") //12
console.log("1"+2)//12
console.log(1+"2"+1) //121
console.log(1+2+"2") //32
console.log("1"+2+2) //122

