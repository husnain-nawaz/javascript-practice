
// const person ={
//     name: "ali",
//     age : 25,
// };
// console.log(Object.keys(person)) // ya keys name or age return kry ga agy wali to values han 
// console.log(Object.values(person)) // y aali or 25 show kry ga kun ky ya ha values
// console.log(Object.entries(person)) // entries both values or keys dono he return krta ha output ma

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


const prompt = require("prompt-sync")(); // npm package  used to get input and parse output's in node.js not the browser

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









