// const prompt = require("prompt-sync")();
// const person ={
//     name: "ali",
//     age : 25,
// };
// console.log(Object.keys(person)) // ya keys name or age return kry ga agy wali to values han 
// console.log(Object.values(person)) // y aali or 25 show kry ga kun ky ya ha values
// console.log(Object.entries(person)) // entries both values or keys dono he return krta ha output ma

// const { get, message } = require("prompt");
// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");

// agr koi arrays ha ya entries koi b han un ko dobara object bnany ky liye object.fromEntries() use krty han

// const arr = [
//     ["name", "Ali"],
//     ["age", 25],
// ];
// const obj = Object.fromEntries(arr); // y aobject bna dy ga array ki entries ko 
// console.log(obj)


// property add ya modify karny ka advanced tareeqa
// const person = {};
// Object.defineProperty(person,"name", {
//     value: "ali", // ya name key ki cvalue ali bna dy ga or addkr dy da object person ma
// });
// console.log(person.name)


// const person = {};
// Object.defineProperty(person, "name",{
//     value : "husnain",
//     enumerable : false, // is ki waja sy value add nahi hoti kun ky enumerbale false kr diya ha 
// });
// console.log(Object.keys(person)) // but property exist krti ha bas person ko call krny sy show nahi ho ge but person.name sy kro to ho ge
// console.log(person.name) // loops or keys ma exist nahi kry ge false ki waja sy 
// console.log(Object.getOwnPropertyNames(person)) // is casema sari property ki output aye ge kun ky false ho ya true ya na ho enumerbale ya show zaroor krvata ha un ko ignore kr ky


// function person(name){
//     this.name = name;
// }
// person.prototype.sayhello = function(){
//     console.log("hello", this.name)
// };


// // constructor ky anda function 
// function person(name){
//     this.name = name;
//     this.sayhello = function(){
//         console.log("hello");
//     };
// }
// is case ma hr bar function ki copy n=ban rahi ha jitni bar b users bany ga 
// lakin prototype ma hr bar function ki copy nahi banti aik bar he or hr bar new users create hon ge usi function ma hechnages ati han


// //closure
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());


// const user = {
//     first : "ali",
//     last: "khan",
//     get fullname(){
//         return this.first+" "+this.last
//     }
// };
// console.log(user.fullname) // fullname() ya callnhi kiy balky get ki wala sy sirf fullname bagair bracket ky call kiya ha get ki ha ya condition


//setter kuxh isy ha
// set name(value){
//     this.name = value.toUpperCase();
// }


// Object.defineProperty{
//     User,
//     "age", {
//         value: 25,
//         writable: false, // writebale change he nahi krny daita kuxh b 
//     }
// };


// const animal = {
//     eat(){}
// };
// const dog = Object.create(animal)



// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter name: ", (name) => {
//   console.log(name);
//   rl.close();
// });


// const mypromise = new Promise((resolve, reject)=>{
//     let kaamhogaya = true;
//     if(kaamhogaya){
//         resolve("data mil gaya");
//     }
//     else{
//         reject("kuxh nahi mila!");
//     }
// });
// console.log(mypromise)



// mypromise.then((result)=>{
//     console.log(result); // data mil gaya
// })
// .catch((error)=>{
//     console.log(error); // nahi milta data
// })
// .finally(()=>{
//     console.log("kaam khataam!");
// });


// const prompt = require("prompt-sync")(); // npm package  used to get input and parse output's in node.js not the browser

// function getnextage(age){
//     return Number.parseInt(age,10)+1;
// }
// let age = prompt("enter your age : ");
// console.log("your nextage is : "+ getnextage(age))



// let name = prompt("name: ");
// console.log(name)

// let age = prompt("Age : "+Number()); // 0 comes before Age : 012 souse number before prompt
// console.log(age)
// // let age = Number(prompt("Age : "));
// console.log(age)

// let city = prompt("City: ");
// console.log(city)


// let isStudnet = prompt("are you a studnet t/f : ");
// isStudnet= isStudnet==="true";
// console.log(isStudnet)


// const country = prompt("your country name: ");
// console.log(country)

// let price = Number(prompt("number 100 : "))
// console.log(price)


// let total;
// let price= Number(prompt("1st number : "));
// let quantity = Number(prompt("2nd number : "));
// console.log("1st number is "+ price +" 2nd number is "+quantity+" = "+price*quantity);


// const greet = String(prompt("greetings : "));
// console.log(greet)


// let hasLicense = prompt("true / false : ");
// hasLicense = hasLicense == "true";
// console.log(hasLicense);

// let isLoggedIn = prompt("true/ false : ") === "true";
// console.log(isLoggedIn)

// fruits = [
//     prompt("1st fruits name : "),
//     prompt("2nd fruits name : "),
//     prompt("3rd fruits name : "),
// ];
// console.log("array of fruits is: ["+fruits+"]");


// let frui


// let fruits = [];
// let i = 1;
// while(true){
//     let input = prompt(`Eneter fruits ${i}: `);
//     if (input===""){
//         let confirm =prompt("Press Eneter again to stop or type fruits: ");
//         if(confirm === ""){
//             break;
//         }
//         fruits.push(confirm);
//     }else{
//         fruits.push(input);
//     }
//     i++;
//     }
// console.log("fruits",fruits);


// let fruits = [
//     prompt("Enter 1st fruit name: "),
//     prompt("Enter 2nd fruit name: "),
//     prompt("Enter 3rd fruit name: "),
// ];
// console.log(fruits)

// let fruits = [];
// for (let i = 1; i <=3; i++) {
//     fruits.push(prompt(`Eneter fruits ${i}: `));
// }
// console.log(fruits)

// let number = [];
// for (let i = 0; i <=3; i++) {
//     number.push(Number(prompt(`Enter Numbers ${i}: `)));        
// }
// console.log(number);

// let obj1= {
//     name: prompt("enter name : "),
//     age: Number(prompt("eneter age here : ")),
// }
// console.log(obj1)

// let car = {
//     brand: prompt("enter brand name: "),
//     model: prompt("enter model name: "),
//     year: Number(prompt("enter year name: ")),
// }
// console.log(car)


// let score = Number(prompt("enter score: "));
// let passed = score>=50;
// console.log(passed)

// let a = prompt("eneter a number: ");
// let b = prompt("enter b number: ");
// [a,b]=[b,a];
// console.log("a: ",a);
// console.log("b ",b)


// class car{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }


// class person {
//     constructor(name){
//         this.name= name;
//     }
//     sayhello(){
//         console.log("Hello : "+this.name);
//     }
// }
// const user = new person("husnain");
// user.sayhello();


// class person {
//     constructor(name){
//         this.name= name;
//     }
//     sayhello(){
//         console.log("name : "+this.name);
//     }
// }
// let user = new person("husnain");
// user.sayhello();

// // internly kaisy kaam kr rahi ha class ya prototype py kaam krti ha 
// function person(){}
// person.prototype.sayhello = function(){
//     console.log("hello ");
// }
// // asiay kaam krta ha 
// const u1 = new person();
// const u2 = new person();
// console.log(u1.sayhello === u2.sayhello) // is ka answer true aye ga kun ky u1 or u2 dono same sayhello sy vlue ly rahy han prototype ki waja sy new function nahi bna rhy


// function person(){
//     this.sayhello = function(){
//         console.log("Hello");
//     };
// }
//  const u1 = new person();
//  const u2 = new person();
//  console.log(u1.sayhello === u2.sayhello) // false kun ky hr person ky liye aik naya function bana 



// function person(name){
//     this.name = name;
// }
// person.prototype.sayhello = function(){
//     console.log(this.name)
// }
// let user1 = new person("husnian");
// let user2 = new person("nawaz")
// console.log(user1.sayhello())
// console.log(user2.sayhello())
// console.log(user1.sayhello === user2.sayhello)// both are true because same sayhello call for both users



// class person {
//     // sayhello(){ // ya aik constrictote ha na ky funtion true result if user1 sayhello compare with user2 say hello
//     //     console.log("hello sir");
//     // }

//     // sayhello =  function() { // false dy ga kun ky ya funtion say helo ma copy bna raha ha
//     //     console.log("hello sir")
//     // }
// }
// const user1 = new person();
// const user2 = new person();
// // console.log(user1.sayhello);
// // console.log(user2.sayhello);
// console.log(user1.sayhello === user2.sayhello)



// function person(){
//     this.sayhello = function(){
//         console.log("hello");
//     }
// }
// const user1 = new person();
// const user2 = new person();
// // console.log(user1.sayhello(),user2.sayhello())
// console.log(user1.sayhello === user2.sayhello);



// class person {
//     constructor(name){ // y aprototype use krta ha is liye fucntion ki 1 he copy hr new object banany pr rehti ha
//         this.name = name;
//     }
//     sayhello(){
//         console.log(this.name)
//     }
// }
// const user1 = new person("musa");
// const user2 = new person("abbasi");
// console.log(user1.sayhello());
// console.log(user2.sayhello());
// console.log(user1.sayhello === user2.sayhello)

 // y anormal function ha 
// function person(name){
//     console.log(name)
// }
// person("musa");
// yahi same fucntion cinstructor funtion ban jata jab new laga kr fucntion ko call krty ham
// function person(name){
//     console.log(name);
// }
// let name1 = person("husnain");
// console.log(name1);


// class car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const mycar = new car("ford", 2014);
// console.log(mycar.age())

// "use strict";
// class car{
//     constructor(name,year){
//         this.name =  name;
//         this.year = year;
//     }
//     age(x){
//         return x- this.year;
//     }
// }
// date = new Date(); // agr ma const yahan sy hata du phir b code chaly ga koi error nahi kun ky ya ma class ky bahir hata raha hu - 
// let year = date.getFullYear();
// const mycar = new car("ford", 2014);
// console.log(mycar.age(year))



// class car {
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return "I have a "+this.carname;
//     }
// }
// class model extends car {
//     constructor(brand, mod){
//         super(brand);
//         this.model =  mod;
//     }
//     show(){
//         return this.present()+" its ia a "+ this.model;
//     }
// }
// const mycar = new model("ford", "mustang");
// console.log(mycar.show());



// class car {
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return "i have a "+ this.carname;
//     }
// }
// class model extends car{
//     constructor(brand,mod){
//         super(brand);
//         this.model=mod;
//     }
//     show(){
//         return this.present()+"it is a "+this.model;
//     }
// }
// let mycar = new model("ford","mustang");
// console.log(mycar.show());


// class car{
//     constructor(brand){
//         this.carname =  brand;
//     }
//     get cnam(){
//         return this.carname;
//     }
//     set cnam(x){
//         this.carname = x;
//     }
// }
// const mycar = new car("toyota");
// console.log(mycar.cnam);



// class car {
//     constructor(brand){
//         this._carname = brand;
//     }
//     get carname(){
//         return this._carname;
//     }
//     set carname(x){
//         return this._carname;
//     }
// }
// let mycar = new car("ali");
// console.log(mycar.carname);


// class car{
//     constructor(brand){
//         this._carname = brand;
//     }
//     get carname(){
//         return this._carname.toUpperCase();
//     }
//     set carname(x){
//         if(x.length >2 ){
//             this._carname= x;
//         }
//         else{
//             console.log("Name chota ha");
//         }
//     }
// }
// const mycar = new car("ford"); // ya setter nahi ha 
// console.log(mycar.carname);
// mycar.carname = "totyota"; // ya setter ha old value replace kr dy ga ford ki or even ford wahan likny ki zaroorat b nahi ha just () khali function okha nich value setter sy assign kro
// console.log(mycar.carname)
// mycar.carname = "b";
// console.log(mycar.carname)


// class car{
//     constructor(name){
//         this.name = name;
//     }
//     static hello(){
//         return "hello";
//     }
// }
// const mycar = new car("ford");
// // console.log(mycar.hello()) // mycar not a function error d y ga kun ky ststic use kiya ha is ki jagha class ka original name likhna pary ga jo ha car
// console.log(car.hello());// ya theek chaly ga kun ky is bar car class ko liya ha na ky mycar jo object bnaya tha pehly usy nahi liya abi



// class car{
//     constructor(name){
//         this.name1 = name;
//     }
//     static hello(x){
//         return "hello "+ x.name1;
//     }
// }

// const mycar = new car("ford");
// console.log(car.hello(mycar));



// console.log("A");

// setTimeout(function(){
//     console.log("b");
// },1000)
// console.log("C");


// let result;
// setTimeout(()=>{
//     result = 5;
// },1000);
// console.log(result)

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,1000) // ya call back ban gya ha 
// matlab abi nahi bad ma chala daina



// const student  = {
//     fullname: "husnain nawaz",
//     marks : 94.3,
//     printmarks: function(){
//         console.log("marks " ,this.marks) // studnet.marks
//     }
// }



// const patients = [
//   { id: 1, name: "Ali", age: 65, balance: 5000 },
//   { id: 2, name: "Sara", age: 25, balance: 0 },
//   { id: 3, name: "Ahmed", age: 70, balance: 2500 },
//   { id: 4, name: "Fatima", age: 40, balance: 1000 }
// ];

// console.log(patients.length) // give you total patients number

// for(let i=0; i<patients.length; i++){
//     if(patients[i].age>=60){
//         console.log(patients[i].name+" "+patients[i].age);
//     }
// }

// sum liya sab ka
// let sum=0;
// for (let i=0; i<patients.length; i++){
//     sum+=patients[i].balance;
// }
// console.log(sum)

// let high = patients[0];
// for(let i=0; i<patients.length; i++){
//     if(patients[i].balance > high.balance){
//         high = patients[i];
//     }
// }
// console.log(high.name+" "+high.balance);


// patient having balance > 1000

// for(let i=0; i<patients.length; i++){
//     if(patients[i].balance>1000){
//         console.log(patients[i].name+" "+patients[i].balance);
//     }
// }


// const claims = [
//   { claimId: 101, amount: 1200, status: "Paid" },
//   { claimId: 102, amount: 800, status: "Pending" },
//   { claimId: 103, amount: 1500, status: "Rejected" },
//   { claimId: 104, amount: 2000, status: "Paid" },
//   { claimId: 105, amount: 700, status: "Pending" }
// ];
// let count = 0;
// for(let i=0; i<claims.length; i++){
//     if(claims[i].status == "Paid"){
//         count++;
//     }
// }
// console.log(count)


//count pending claims
// let count=0;
// for(let i=0; i<claims.length;i++){
//     if(claims[i].status == "Pending"){
//         count++;
//     }
// }
// console.log(count)



// Count rejected claims
// let count=0;
// for(let i=0; i<claims.length;i++){
//     if(claims[i].status == "Rejected"){
//         count++;
//     }
// }
// console.log(count)


// Calculate total paid amount.
// let sum=0;
// for (let i=0; i<claims.length; i++){
//     if(claims[i].status == "Paid"){
//         sum+=claims[i].amount;
//     }
// }
// console.log(sum)


// Calculate total pending amount.
// let sum=0;
// for (let i=0; i<claims.length; i++){
//     if(claims[i].status == "Pending"){
//         sum+=claims[i].amount;
//     }
// }
// console.log(sum)

// Find highest claim amount.
// let high=claims[0];
// for(let i=0; i<claims.length; i++){
//     if(claims[i].amount>high.amount){
//         high=claims[i];
//     }
// }
// console.log(high.amount)



// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// let sum=0;
// for(let i=0; i<transactions.length; i++){
//     sum+=transactions[i].amount;
// }
// console.log(sum)

// ------------------ revenue per patient -------------------


// for(let i=0; i<transactions.length; i++){
//     let alreadypinted = false;
//     for(let k=0;k<i; k++){
//         if(transactions[i].patient === transactions[k].patient){
//             alreadypinted= true;
//             break;
//         }
//     }
// }
// if(alreadypinted){
//     continue;
// }

// let revenue = 0;
// for(let j=0; j<transactions.length; j++){
//     if(transactions[i].patient === transactions[j].patient){
//         revenue +=transactions[j].amount;
//     }
// }
// console.log(transactions[i].patient,revenue)



// for (let i = 0; i < transactions.length; i++) {

//   let alreadyPrinted = false;

//   // Check karo patient pehle process ho chuka hai?
//   for (let k = 0; k < i; k++) {
//     if (transactions[i].patient === transactions[k].patient) {
//       alreadyPrinted = true;
//       break;
//     }
//   }

//   if (alreadyPrinted) {
//     continue;
//   }

//   let revenue = 0;

//   // Is patient ki sari amounts add karo
//   for (let j = 0; j < transactions.length; j++) {
//     if (transactions[i].patient === transactions[j].patient) {
//       revenue += transactions[j].amount;
//     }
//   }

//   console.log(transactions[i].patient, revenue);
// }



// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// let revenue = {};
// for(let i=0; i<transactions.length; i++){
//   if(revenue[transactions[i].patient]){
//     revenue[transactions[i].patient]+=transactions[i].amount;
//   }
//   else{
//     revenue[transactions[i].patient] = transactions[i].amount;
//   }
// }
// console.log(revenue)




// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// //find print repeated or not
// for(let i=0; i<transactions.length; i++){
//   let alreadyPrinted = false;
//   for(let k=0; k<i; k++){
//     if(transactions[i].patient === transactions[k].patient){
//       alreadyPrinted = true;
//       break;
//     }
//   }

// if(alreadyPrinted){
//   continue;
// }
// // now print those values which are true or matched by sum
// let revenue = 0;
// for(j=0; j<transactions.length; j++){
//   if(transactions[i].patient === transactions[j].patient){
//     revenue+=transactions[j].amount; 
//   }
// }
// console.log(transactions[i].patient,revenue)
// } // i loop end here sab is ky andar ha


// -------------------------------------------------------

// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// let revenue = {};
// for(let i=0; i<transactions.length; i++){
//   if(revenue[transactions[i].patient]){ // y ab likh sakty sai keys yahan true han bas khali string nahi jo truthy or falsey ma parha hu ha 
//     revenue[transactions[i].patient] += transactions[i].amount;
//     console.log("check "+revenue[transactions[i].patient],transactions[i].amount);
//   }
//   else{
//     revenue[transactions[i].patient] = transactions[i].amount;
//   }
// }
// console.log(revenue)
// if(revenue[transactions[i].patient] !== undefined)
// code ma ya revenue["ali"] ata ha oehli bar key ha ali ya abi revneu ema esist he nahi karti is ki false daiti ha
// or jab     revenue[transactions[i].patient] = transactions[i].amount;
// line chalti ha to matlab revnue ma jo b patient tha jasit ali pehly wala us ko convert r do is ki value ky brara jo 1000 ho ga or 1000 jab b aye ga wo true ho ga



// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// let revenue = {};
// for(let i=0; i<transactions.length; i++){
//   if(revenue[transactions[i].patient]){ // y ab likh sakty sai keys yahan true han bas khali string nahi jo truthy or falsey ma parha hu ha 
//     revenue[transactions[i].patient] += transactions[i].amount;
//   }
//   else{
//     revenue[transactions[i].patient] = transactions[i].amount;
//   }
// }
// console.log(revenue)
// let name = "";
// let max=0;
// for(let patient in revenue){
//   if(revenue[patient]> max){
//   max=revenue[patient];
//   name = patient;
//   }
// }
// console.log(max)
// console.log(name);


// let keys = Object.keys(revenue);
// console.log(keys);
// let max=0;
// let name = "";
// for(let i=0;i<keys.length;i++){
//   if(revenue[keys[i]]>max){
//     max=revenue[keys[i]];
//     name=keys[i];
//   }
// }
// console.log(name,max);


// --------------------- Average transaction amount --------------------


// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 9000 }
// ];

// let sum=0;
// let count = 0;
// for(let i=0; i<transactions.length; i++){
//   sum+=transactions[i].amount;
//   count++;

// function aveag(){
//   let s = sum/count;
//   return s;
// }
// }
// console.log(sum,count)
// console.log("average transaction for all patients is : "+aveag())




 


// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// let revenue = {};
// let max=0;
// let name="";
// let count=0;
// for(let i=0; i<transactions.length; i++){
//   if(revenue[transactions[i].patient]){
//     revenue[transactions[i].patient]+=transactions[i].amount;
//   }
//   else{
//     revenue[transactions[i].patient] = transactions[i].amount;
//   }
  
// let averg = Object.keys(revenue);
// for(let j=0;j<averg.length;j++){
//   if(revenue[averg[j]]>max){
//     max=revenue[averg[j]];
//     count++;
//     name=averg[j];
//   } 
// }
// //finding the count of same names means howmnay times it comes in code

// }
// console.log(name,max)
// console.log(revenue)
// console.log("count of total names: "+count)

// ---------------------------------------------------------------------



// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// let revenue={};
// let count = {};
// let aveage = {};
// for(let i=0; i<transactions.length; i++){
//   if(revenue[transactions[i].patient]){
//     revenue[transactions[i].patient]+=transactions[i].amount;
//   }
//   else{
//     revenue[transactions[i].patient] = transactions[i].amount;
//   }
//   // count the numbers how many time repeat
//   if(count[transactions[i].patient]){
//     count[transactions[i].patient] = count[transactions[i].patient]+1;
//   }
//   else{
//     count[transactions[i].patient]=1;
//   }
//   for(let patientname in revenue){
//     aveage[patientname]= revenue[patientname]/count[patientname];
//   }
// }
// console.log(revenue)
// console.log(count)
// console.log(aveage)


// --------------------------------------------------------


// const transactions = [
//   { patient: "Ali", amount: 1000 },
//   { patient: "Sara", amount: 2500 },
//   { patient: "Ahmed", amount: 1500 },
//   { patient: "Ali", amount: 500 },
//   { patient: "Sara", amount: 1000 }
// ];

// revevenue = {};
// for(let i=0;i<transactions.length; i++){
//   if(i===transactions.length-2){
//   console.log(transactions[i].amount)
// }}
// console.log(transactions[transactions.length-2].amount)

// -------------------------------------------------------------


// const employees = [
//   { id: 1, name: "Ali",    dept: "IT",      salary: 80000, yearsExp: 8  },
//   { id: 2, name: "Sara",   dept: "HR",      salary: 60000, yearsExp: 3  },
//   { id: 3, name: "Ahmed",  dept: "IT",      salary: 95000, yearsExp: 12 },
//   { id: 4, name: "Fatima", dept: "Finance", salary: 70000, yearsExp: 5  },
//   { id: 5, name: "Usman",  dept: "HR",      salary: 55000, yearsExp: 2  }
// ];

// -------------------------------------------------------
// Find all IT department employees
// for(let i=0; i<employees.length; i++){
//   if(employees[i].dept === "IT"){
//     console.log(employees[i].name,employees[i].dept);
//   }
// }
// -------------------------------------------------------
// Calculate total salary expense
// let sum=0;
// for(let i=0; i<employees.length; i++){
//   sum+=employees[i].salary;
// }
// console.log(sum);
// -------------------------------------------------------
// Find employee with highest salary
// let max=0;
// let name="";
// for(let i=0; i<employees.length; i++){
//     if(employees[i].salary>max){
//       max=employees[i].salary;
//       name=employees[i].name;
//     }
// }
// console.log(name,max);
// -------------------------------------------------------
// Find employees with more than 5 years experience
// let maxexp=0;
// for(let i=0; i<employees.length; i++){
//       if(employees[i].yearsExp>maxexp){
//       maxexp=employees[i].yearsExp;
//     }
// }
// console.log(maxexp);
// -------------------------------------------------------
// Calculate average salary
// let sum=0;
// let count = 0;
// for(let i=0; i<employees.length; i++){
//   sum+=employees[i].salary;
//   count++;
// }
// //average 
// function average(){
//   return sum/count;
// }
// console.log(count,sum,average());

//--------------------------------------------------------------
// Count employees per department { IT: 2, HR: 2, Finance: 1 }
// let count=0;
// let count1=0;
// let count2=0;
// for(let i=0; i<employees.length; i++){
//   if(employees[i].dept==="IT"){
//     count++;
//   }
//   else if(employees[i].dept==="HR") {
//     count1++;
//   }
//     else if(employees[i].dept==="Finance") {
//     count2++;
//   }
// }
// console.log(count)
// console.log(count1)
// console.log(count2)
//--------------------------------------------------------------
// Count employees per department { IT: 2, HR: 2, Finance: 1 }
// let sum={};
// for(let i=0; i<employees.length; i++){
//   if(sum[employees[i].dept]){
//     sum[employees[i].dept]=sum[employees[i].dept]+1;
//   }else{
//     sum[employees[i].dept] = 1;
//   }
// }
//   console.log(sum)
//--------------------------------------------------------------
// Total salary per department
// let sum={};
// for(let i=0; i<employees.length; i++){
//   if(sum[employees[i].dept]){
//     sum[employees[i].dept]+=employees[i].salary;
//   }else{
//     sum[employees[i].dept] = employees[i].salary;
//   }
// }
//   console.log(sum)

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("Some error occured");
// })


// function getData(dataid,getnextdata){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("Success");
//             if(getnextdata){
//                 getnextdata();
//             }
//         },2000)
//     })
// }
// let v = getData(1123);
// v;


// const getpromise = ()=>{
//     return new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("Success");
//     reject("error")
// })
// }
// let promise = getpromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// })
// promise.catch((err)=>{
//     console.log("rejected ",err)
// })


// const getpromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am promise");
//         resolve("Sucess ho gya ya resolve ha")
//         reject("cancel ya reject ha")
//     })
// }
// let promisecheck = getpromise();
// promisecheck.then((res)=>{
//     console.log("promise fullfilled + ", res);
// })
// promisecheck.catch((err)=>{
//     console.log("promise rejected + ", err);
// })



// const getdata = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         resolve("resolve data");
//         reject("reject data");
//     })
// }
// let promisecheck = getdata();
// promisecheck.then((res)=>{
//     console.log("promise fullfilled ho gya ", res);
// })
// promisecheck.catch((err)=>{
//     console.log("reject ho gya ha catch", err);
// })


// function asyncfun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("sucess")
//         },3000)
//     })
// }
// function asyncfun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("sucess")
//         },4000)
//     })
// }
// console.log("data1 fetching....");
// let p1 = asyncfun();
// p1.then((res)=>{
//     console.log(res);
//     let p2 = asyncfun2(); ya promise chaining ha aik then ky sath us ky under he dusra then b likh diya ha 
//     p2.then((res)=>{
//         console.log(res);
//     })
// })
// console.log("data2 fetching...."); // y aakahat run ho ga 2 sec ma he - jab ky hamy chaiye 4 sec bad ky pehla run ho phir ya run ho - ab ham callback jis tarha parha tha ky pehly callback ma dusra rakha tha is ma b yahi krna h o ha 
// let p2 = asyncfun();
// p1.then((res)=>{
//     console.log(res)
// })

// function getData(dataid){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid)
//                     resolve("success");
//         },3000)
//     })
// }

// getData(3).then((res)=>{  //i si y b kr sakty han 
//     console.log(res);
//     getData(5).then(()=>{
//         console.log(res)
//     })
// })
// ya nichy wali ab chaing ha sahi wali 
// getData(1).then((res)=>{
//     return getData(2); // getdata1 print krvalo jo upper function ma likha ha phir getdata 2 ma 2 ki value phir agyy 3 or end ya chiing ha promises ki 
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("weather data");
//         resolve(200);
//     },2000)
// });
// }
// async function getwaethrdata(){
//     await api(); // 1st call
//     await api(); // 2nd call
// }
// getwaethrdata() // y acall kr rahy us aync function ko ji sma prmisese call ho rahy await sy
// jo b koi function ma promise hota ha or wo promise ko retuen krta ha jaisy new promis ho us function ma to ham normally then catch sy call nahi krty aisa nahi kr nahi sakty - kr sakty han kain best way ja==ha await ka use kya jaye or await to hota he aync function ma call ha to han ny prmise ko get krny ky liye yaha ya kiya ky new function creat ekya getweatherdata ky name sy 


// function getdata(datid){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(datid);
//         resolve("succes");
//     },2000)
//     });
// }
// async function data(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
// }
// data();

// .the .catch use kr sakty han async kui jagha lakin ham use nahi krty or usi scenerios ma use hot aha han .the catch use hon wahan aysn cfuntion use nahi hoty or jahan aysnc hon wahan ,the .catch nahi hty  vise versa


// IIFE  ya funvtion hoty han jo foran invpoke ho jaty ya usi jagaha chal jaty han alag sy nich function ko call krny ki zaroorat nahi parti ha or ya sirf aik bar he chalty han
// (function(){
// })();
// (()=>{
// })();
// (async ()=>{
// })();
// (async function (){
// })();
// (async function fun1(){
// })();
// ya sary yahan IIFE functiosn han



// function getdata(datid){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(datid);
//         resolve("succes");
//     },2000)
//     });
// }
// (async function data(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
// })(); // is ko dobara use nahi kr sakty aik he bar chalata ha - agr dobara chalana b ho to copy pasete krna pry  ga pura ka pura code sirf function call he nahi krna pry ga balky sara chalan pry ga


// function showmessage(callback){
//     setTimeout(callback,2000);
// }
// showmessage(()=>{
//     console.log("Done");
// })


// function displayresult(result){
//     console.log(result);
// };
// function calculate(a,b,callback){
//     const sum = a+b;
//     callback(sum);
// }
// calculate(5,10,displayresult)



// function calculate(a, b, callback){
//     let sum = a+b;
//     callback(sum);
// }
// function displayreult(result){
//     console.log(result)
// }
// calculate(1,2,displayreult)


// function calculate(a,b,callback){
//     let sum = a+b;
//     callback(sum);
// }
// calculate(1,2,(result)=>{
//     console.log(result);
// })


// function checkresult(marks,callback){
//     callback(marks);
// }
// checkresult(85,(marks)=>{
//     if(marks>40){
//         console.log("pass")
//     }else{
//         console.log("Fail")
//     }
// })


// function checkresult(marks,callback){
//     callback(marks);
// }
// function check(marks){
//     if(marks>40){
//         console.log("pass")
//     }else{
//         console.log("Fail")
//     }
// }
// checkresult(85,check)


// const users = ["Ali","sara","Husnain"];
// function processusers(users1,callback){
//     for(let i=0; i<users1.length; i++){
//         callback(users1[i]);
//     }
// }
// processusers(users,(display)=>{
//     console.log(display);
// })

// const user = ["Ali","Musa","Husnain","kamal"];
// function processloop(useronebyone,callback){ // ya jo useroneby one ha na ya nichy diye huay user ky brabar ha user nich ham user array laity han or function ma ham us ko useroneby one ky name sy kr daity like useronebyone = user ha lin funtion ma user nahi array ki values liye huaye balky useroneby one ha
//     for(let i=0; i<user.length; i++){
//         callback(useronebyone[i]);// callback khud aik function ah jao ha ()=> {} arrow wal function jo nichy diya hua ha or ya callback brabakr ha ky callback (user onebyone[i]) ma jo b loop lagky values arahi han un ko brabakr kr o dipaly ma or display print kr do - 
//     }
// }
// processloop(user,(display)=>{
//     console.log(display);
// });


// const user = ["Ali","Musa","Husnain","kamal"];
// function processloop(userkivaluessaree,callback){
//     for(let i=0; i<user.length; i++){
//         callback(userkivaluessaree[i]);
//     }
// }
// processloop(user,(valuesofloop)=>{
//     console.log(valuesofloop)
// })


// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data Loaded");
//     },2000)
// });
// promise.then((message)=>{
//     console.log(message)
// })



// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Network Erroe");
//     },2000)
// });
// promise.catch((rej)=>{
//     console.log(rej);
// })


// function checkage(age){
//     return new Promise((resolve,reject)=>{
//         if(age>18){
//             resolve("Eligible");
//         }
//         else{
//             reject("illegle");
//         }
//     })
// }
// checkage(19).then((message)=>{
//     console.log(message)
// }).catch((message)=>{
//     console.log(message);
// })

// checkage(12).then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message)
// })


// function getproduct(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 id: 1,
//                 name:"Musa",
//             })
//         },3000)
//     })
// }
// getproduct().then((message)=>{
//     console.log(message) // ya message = ha rolve ky andar ki value wo cahhye jo b ho  kun k ythen seolve ki value to pakarta ha or catch pakarta ha vaue ko jo reject ma ho 
// })


// now using async/ await method
// function getproduct(){
//     return new Promise((resolv,reject)=>{
//         setTimeout(()=>{
//             resolv({
//                 id: 1,
//                 name: "husnain",
//             })
//         },2000)
//     })
// }
// async function showbaby(){
//     const p = await getproduct();
//     console.log(p);
//     console.log(p.id);
//     console.log(p.name);
// }
// showbaby();



// function getData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(id);
//             resolve("done");
//         }, 2000);
//     });
// }

// async function showData() {
//     await getData(1).then((value) => {
//     console.log(value);
//     });
//     await getData(2).then((value) => {
//     console.log(value);
//     });
//     await getData(3).then((value) => {
//     console.log(value);
//     });
// }

// showData();


// function getnumbers(id){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          console.log(id);
//         resolve("Done");
//        },3000)
//     })
// } // priomise ki values ya promie ko get krny kky liye new async funtion banna pay ga kun ky await chhaitye settimeout ky liyejo chalta he asycn cfuntion ma ha
// async function showvalues(){
//     console.log(await getnumbers(1));
//     console.log(await getnumbers(2));
//     console.log(await getnumbers(3));
// }
// showvalues();


// function getpatient(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 id: 1,
//                 name: "Husnain",
//             });
//         },3000)
// })}
// async function showg(){
//     console.log(await getpatient(1).then((bbag)=>{
//         console.log(bbag);
//     }))
// }
// showg();

// async function showpatient(){
//     let g = await getpatient(1);
//     console.log(g.id);
//     console.log(g.name)
// }
// showpatient();


// function getData(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data " + id + " received");
//             resolve(id);
//             // resolve("checkbbay");
//         }, 2000);
//     });
// }

// async function run() {
//     console.log("Fetching 1...");
//     await getData(1).then((message)=>{
//         console.log(message)
//     });

//     console.log("Fetching 2...");
//     await getData(2);

//     console.log("Fetching 3...");
//     await getData(3);
// }

// run();

// const prompt = require("prompt-sync")(); 

// class student{
//     constructor(name,marks,totalmarks){
//         this.name = name;
//         this.marks = marks;
//         this.totalmarks = totalmarks;
//     }
//     checkresult(){
//         let percentage = (this.marks/this.totalmarks)*100;
//         if(this.marks>=33){
//             console.log(this.name+" is passed got "+this.marks+" whith percentage of "+percentage.toFixed(2))
//         }else{
//             console.log(this.name+" is failed got "+this.marks+" whith percentage of "+percentage.toFixed(2))
//         }
//     }
// }
// const name1 = prompt("your name are: ");
// const marks1 = Number(prompt("your marks are: "))
// const totalmarks1 = Number(prompt("what are total marks: "))
// const s1= new student(name1,marks1,totalmarks1);
// console.log(s1.name);
// console.log(s1.marks);
// console.log(s1.totalmarks);
// s1.checkresult();



// const products = [
//   { id: 1, name: "Laptop",  category: "Electronics", price: 150000, stock: 10 },
//   { id: 2, name: "Chair",   category: "Furniture",   price: 25000,  stock: 0  },
//   { id: 3, name: "Phone",   category: "Electronics", price: 80000,  stock: 5  },
//   { id: 4, name: "Desk",    category: "Furniture",   price: 35000,  stock: 8  },
//   { id: 5, name: "Tablet",  category: "Electronics", price: 60000,  stock: 0  }
// ];

// // Find out of stock products (stock === 0)
// for(let i=0; i<products.length; i++){
//     if(products[i].stock === 0){
//         console.log(products[i].name);
//     }
// }
// Total inventory value (price × stock) for each product
// let sum=0;
// for(let i=0; i<products.length; i++){
//     let value = products[i].price * products[i].stock
//         console.log(value);
//         sum = sum+value;
// }
// console.log(sum)

// Most expensive product
// let max= 0;
// for(let i=0; i<products.length; i++){
//     if(products[i].price>max){
//     max=products[i].price;}
// }
// console.log(max)

// All Electronics under price 100000

// for(let i=0; i<products.length; i++){
//     if(products[i].price<100000 && products[i].stock !== 0){
//     console.log(products[i].name,products[i].price);
// }}


// Count products per category
// count = {};
// for(let i=0; i<products.length; i++){
//     if(count[products[i].category]){
//         count[products[i].category]++;
//     }else{
//         count[products[i].category]=1;
//     }
// }
// console.log(count)

// Total value of all in-stock items

// let sum=0;
// for(let i=0; i<products.length; i++){
//     let value = products[i].price * products[i].stock
//         // console.log(value);
//         sum = sum+value;
// }
// console.log("all instiock items worth: "+sum)



// const students = [
//   { name: "Ali",    marks: 85, subject: "Math",    passed: true  },
//   { name: "Sara",   marks: 45, subject: "Science",  passed: false },
//   { name: "Ahmed",  marks: 92, subject: "Math",    passed: true  },
//   { name: "Fatima", marks: 38, subject: "English",  passed: false },
//   { name: "Usman",  marks: 76, subject: "Science",  passed: true  }
// ];

// Count passed and failed students
// for(let i=0; i<students.length; i++){
//     if(students[i].passed == true){
//         console.log(students[i].name+" passed");
//     }
//     else{
//         console.log(students[i].name+" failed")
//     }
// }

//Count passed and failed students but by marks 
// let pass = 0;
// let fail = 0;
// for(let i=0; i<students.length; i++){
//   if(students[i].marks >=50){
//     console.log(students[i].name+"passed")
//     pass++;
//   }
//   else{
//     console.log(students[i].name+"failed");
//     fail++;
//   }
// }
// console.log(pass);
// console.log(fail);


// Find all Math students
// for(let i=0; i<students.length; i++){
//   if(students[i].subject == "Math"){
//     console.log(students[i].name);
//   }
// }


// Find highest scorer
// let max=0;
// let name ="";
// for(let i=0; i<students.length; i++){
//   if(students[i].marks > max){
//     max = students[i].marks;
//     name = students[i].name;
//   }
// }
// console.log(name,max)


// Calculate class average marks
// let sum=0;
// let count =0;
// for(let i=0; i<students.length; i++){
//     sum+=students[i].marks;
//     count++;
//   function average(){
//     average = sum/count;
//     return average;
//   }
// }

// console.log(sum);
// console.log(count)
// console.log("average marks are: " +average())

// Find students who scored above average

// let sum=0;
// let count =0;
// let maxavg=0;
// for(let i=0; i<students.length; i++){
//     sum+=students[i].marks;
//     count++;
//   function average(){
//     average = sum/count;
//     return average;
//   }
// }
// let avg= average();
// console.log(sum);
// console.log(count)
// console.log("average marks are: " +avg)

// for(let j=0; j<students.length; j++){
//   if(students[j].marks>avg){
//     maxavg = students[j].marks;
//     console.log(students[j].name,maxavg)
//   }
// }

// // Group students by subject
// const students = [
//   { name: "Ali",    marks: 85, subject: "Math",    passed: true  },
//   { name: "Sara",   marks: 45, subject: "Science",  passed: false },
//   { name: "Ahmed",  marks: 92, subject: "Math",    passed: true  },
//   { name: "Fatima", marks: 38, subject: "English",  passed: false },
//   { name: "Usman",  marks: 76, subject: "Science",  passed: true  }
// ];
// let grouped = {};
// for(let i=0; i<students.length; i++){
//   if(grouped[students[i].subject]){
//     grouped[students[i].subject].push(students[i]);
//   }else{
//     grouped[students[i].subject]=[students[i]];
//   }
// }
// console.log(grouped)



// const employees = [
//   { name: "Ali",    dept: "HR",       salary: 50000 },
//   { name: "Sara",   dept: "HR",       salary: 40000 },
//   { name: "Ahmed",  dept: "IT",       salary: 60000 },
//   { name: "Fatima", dept: "Marketing",salary: 35000 },
//   { name: "Usman",  dept: "HR",       salary: 45000 }
// ];

// Group employees by dept
// let department = {};
// for(let i=0; i<employees.length; i++){
//   if(department[employees[i].dept]){
//     department[employees[i].dept].push(employees[i]);
//   }else{
//     department[employees[i].dept] = [employees[i]];
//   }
// }
// console.log(department)

// let department = {};
// for(let i=0; i<employees.length; i++){
//   if(Object.keys(department).find(key=> key===employees[i].dept)){
//     department[employees[i].dept].push(employees[i]);
//   }else{
//     department[employees[i].dept] = [employees[i]];
//   }
// }
// console.log(department)


// let department = {};
// for(let i=0; i<employees.length; i++){
//   if(department.hasOwnProperty(employees[i].dept)){
//     department[employees[i].dept].push(employees[i]);
//   }else{
//     department[employees[i].dept] = [employees[i]];
//   }
// }
// console.log(department)



// const employees = [
//   { name: "Ali",    dept: "HR",       salary: 50000 },
//   { name: "Sara",   dept: "HR",       salary: 40000 },
//   { name: "Ahmed",  dept: "IT",       salary: 60000 },
//   { name: "Fatima", dept: "Marketing",salary: 35000 },
//   { name: "Usman",  dept: "HR",       salary: 45000 }
// ];
// let department = {};
// for (let i = 0; i < employees.length; i++) {

//   if (department[employees[i].dept]) {
//     department[employees[i].dept] = [...department[employees[i].dept], employees[i]];
//   } else {
//     department[employees[i].dept] = [employees[i]];
//   }
// }
// console.log(department);



// let department = {};
// for (let i = 0; i < employees.length; i++) {
//   department[employees[i].dept] = employees[i];
// }
// console.log(department)



// class Student {
//   constructor(studentId,name){
//     this.studentId = studentId;
//     this.name = name;
//     this.marks = [];
//   }
//   addMark(mark){
//     this.marks.push(mark);
//   }
//   getAverage(){
//     let sum = 0;
//     for(let i=0; i<this.marks.length; i++){
//       sum+=this.marks[i];
//     }
//     return sum/this.marks.length;
//   }
//   getgrades(){
//     let gardes_are = this.getAverage();
//     if(gardes_are > 90) return "A";
//     if(gardes_are > 80) return "B";
//     if(gardes_are > 70) return "C";
//     if(gardes_are > 60) return "D";
//     if(gardes_are > 50) return "E";
//     if(gardes_are < 50) return "F";
//   }
// }
// let s = new Student(1,"Husnain")
// s.addMark(93);
// s.addMark(93);
// s.addMark(55);
// s.addMark(66);
// console.log(s.getAverage(),s.getgrades())

// ------------------------------------------------------

// class Student {
//   constructor(studentId,name,marks){
//     this.studentId = studentId;
//     this.name = name;
//     this.marks = marks;
//   }
//   getAverage(){
//     let sum = 0;
//     let count = 0;
//     for(let i=0; i<this.marks.length; i++){
//       sum+=this.marks[i];
//       count++;
//     }
//     return sum/count;
//   }
//   getgrades(){
//     let gardes_are = this.getAverage();
//     if(gardes_are > 90) return "A";
//     if(gardes_are > 80) return "B";
//     if(gardes_are > 70) return "C";
//     if(gardes_are > 60) return "D";
//     if(gardes_are > 50) return "E";
//     if(gardes_are < 50) return "F";
//   }
// }
// let s = new Student(1,"Husnain",[23,23,45,77,88])
// console.log(s.getAverage(),s.getgrades())


// const students = [
//   { name: "Ali", marks: 85, subject: "Math" },
//   { name: "Sara", marks: 45, subject: "Science" },
//   { name: "Ahmed", marks: 92, subject: "Math" },
//   { name: "Fatima", marks: 38, subject: "English" },
//   { name: "Usman", marks: 76, subject: "Science" }
// ];

// Count how many students passed (marks >= 50).
// class StudentManager{
//   constructor(students){
//     this.students = students;
//   }
//   funcperform(){
//   let greaterreturn = [];
//   let count = 0;
//   for(let i=0; i<this.students.length; i++){
//     if(this.students[i].marks>=50){
//       greaterreturn.push(this.students[i]);
//       count++;
//     }
//   }
//       return {greaterreturn,count};
// }
// }
// let s = new StudentManager(students);
// let m = s.funcperform();
// console.log(m);


// export function add(a,b){
//   return a+b;
// }

// ------------------------------------

// const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// // Remove duplicates while preserving order.
// const unique = [...new Set(nums)]
// console.log(unique)

// debugger;
// const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// const unique = nums.filter((a,b)=>{ // yahan a value ha array ma or b index ha aisy he return krti ha ya
//     console.log(a,b)
//     return nums.indexOf(a)=== b;
// });
// console.log(unique);


// const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// const unique = [];
// for(let i=0; i<nums.length; i++){
//   if(!unique.includes(nums[i])){
//     unique.push(nums[i]);
//   }
// }
// console.log(unique)


// const nums = [3, 7, 4, 7, 5, 9, 2, 6, 5, 3];
// const unique = [];
// for (let i = 0; i < nums.length; i++) {
//   let found = false;
//   for (let j = 0; j < unique.length; j++) {
//     if (nums[i] === unique[j]) {
//       found = true;
//       break;
//     }
//   }
//   if (!found) {
//     unique.push(nums[i]);
//   }
// }
// console.log(unique);


// const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// let unique = [];
// for(let i=0; i<nums.length; i++){
//   let found = false;
//   for(let j=0; j<unique.length;j++){
//     if(nums[i]===unique[j]){
//       found = true
//       break;
//     }
//   }
//   if(!found){
//     unique.push(nums[i]);
//   }
// }
// console.log(unique)


// const nums = [3, 7, 4, 1, 5, 9, 7, 6, 5, 3,2,2,-3];
// const asending = [...nums].sort((a,b)=>a-b);
// const desending = [...nums].sort((a,b)=>b-a);
// console.log(asending)
// console.log(desending)

// const fruits = ["apple", "banana", "mango", "orange", "kiwi"];
// Create a new array with fruits having even length names.

// const evenlengthfruits = fruits.filter((value)=>{
//   return value.length % 2 == 0;
// })
// console.log(evenlengthfruits)


// const fruitseven = fruits.filter((values)=>{
//     return values.length % 2 == 0;
// })
// console.log(fruitseven);


// const rotate = fruits.slice(2).concat(fruits.slice(0,2))
// console.log(rotate)


// Join them with " → " separator.

// const jointhem = fruits.join(" -> ")
// console.log(jointhem)


const people = [{name:"Ali", age:25}, 
    {name:"Sara", age:30}, 
    {name:"Ahmed", age:22},
    {name:"Musa", age: 88},
    {name:"kaleem", age: 66}];

// Sort by age ascending.
// const sortbymax = people.sort((a,b)=> a.age-b.age)
// console.log(people)


// by using bubble sort
// for(let i=0; i<people.length-1; i++){ // length ha 3 or ya 301 yani 2 tak chly ga yani 0,1,2 is tarha     for(let j=0; j<people.length-i-1; j++){
//     for(let j=0; j<people.length-i-1; i++){ // matlab 
//         let temp = people[i];
//         people[i] = people[j];
//         people[j]= temp;
//     }
// }
// console.log(people)

// for(let i=0; i<people.length-1; i++){
//     for(let j=0; j<people.length-i-1; j++){
//         if(people[j].age>people[j+1].age){
//             let temp = people[j];
//             people[j] = people[j+1];
//             people[j+1] = temp;
//         }
//     }
// }
// console.log(people);

// ascending
// for(let i=0; i<people.length-1; i++){
//     for(let j=0; j<people.length-i-1; j++){
//         if(people[j].age>people[j+1].age){
//             let temp = people[j];
//             people[j] = people[j+1];
//             people[j+1] = temp;
//         }
//     }
// }
// console.log(people)

// descending order if <
// for(let i=0; i<people.length-1; i++){
//     for(let j=0; j<people.length-i-1; j++){
//         if(people[j].age<people[j+1].age){
//             let temp = people[j+1];
//             people[j+1] = people[j];
//             people[j] = temp;
//         }
//     }
// }
// console.log(people)


// Get array of just names.





















