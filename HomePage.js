  
// let v;
// function multiply(a,b){
//     v = a*b;
//     return v;
// }
// let result = multiply(3,5);
// console.log(result);

// const { jsx } = require("react/jsx-runtime")


// x = findmax(1,123, 500, 115, 44, 88);
// function findmax(){
//     let max = -Infinity;
//     for (let i=0; i<arguments.length; i++){
//         if(arguments[i]>max){
//             max = arguments[i];
//         }
//     }
//     console.log(max);
// }

// x = sumall(1, 123, 500, 115, 44, 88);
// function sumall(){
//     let sum =0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum=sum+arguments[i];
                
//     }console.log(sum)
// }

// function subract(a,b){
//     return a-b;
// }
// let n= subract(7,5);
// let m= subract(5,6)
// console.log(n)
// console.log(m)



// let v;
// function tocelcius(fahrenheit){
//     v= (5/9) * (fahrenheit-32);
//     return v;
// }
// let value = tocelcius(103); //ifinstaed of number give error or output of NaN like103 use 'ali'
// console.log(value)

// let v;
// function myfun(x,y){
//     if(y===undefined){ // value pass as object only one so y govw undefined so in default we gove y =2 if dont pass in argumnt as y value 
//         y=2;
//     }
//     v = x*y;
//     return v;
// }myfun(4,3);
// console.log(v)


// let v;
// function myfun(x,y=12){
//     v= x+y;
//     return v;
// }myfun(2);
// console.log(v);



// function sum(...args){
//     let sum = 0;
//     for (let arg of args) sum+=arg;
//     return sum;
// }
// let x = sum(2,3,4,67,7,5,4,3,2,22,1,3,4,22);
// console.log(x)


// const funsum = function multiply(a,b,c){
//     let v = a*b*c;
//     return v;
//     console.log(v);
// };


// const multiply = function (a,b){ return a*b}
// console.log(multiply(4,3));



// const add =  function sum(a,b){ return a+b;} // function can be craete as add() or also without giving name to it 
// console.log(add(4,5));


// function run(fun){
//     return fun();
// }
// const sayhello=function(){
//     return "Hello";
// };
// console.log(run(sayhello));


// function run(s){
//     return s();
// }
// const hello = function(){
//     return "hello";
// }
// console.log(run(hello));


// let add = sum(2,3); // can call function even before fu ntion itself defined
// console.log(add);
// function sum(a,b){return a+b};


// let sum = (2,3); 
// console.log(sum) //not work because functon befined before the function and function assigned to avlaiable thi sis the main reason
// const add= function (a,b){return a+b};


// const multiply = (a,b) => a*b;
// console.log(multiply(5,4));

// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(3,4));


// const hello = () => "hellow orld";
// console.log(hello())

// const sqr = (x) => x**x; // wit parameters
// console.log(sqr(4));


// const sqr = x=> x**x; // without paameters
// console.log(sqr(5))


// const h = (val)=>"hello"+val;
// console.log(h("husnain"))


// const name = firtsname => "hi "+firtsname;
// console.log(name("musa"))

// const hello =()=> "hello sir";
// console.log(hello())


// const myfunc = (x,y)=>{ return x*y} 
// console.log(myfunc(3,5))


// console.log(hello()) // funtion call before ven create dont work here in this arrow function but it wil work in othr cases
// const hello = ()=>"heloo";


// const person = {
//     name = "husnain",
//     greet: function(){
//         return this.name;
//     }
// }

// const person={
//     name = "ali",
//     greet: ()=>{
//         return this.name; /// arrowfunction here will give error 
//     }
// }


// ------------- objects in jsvacript 

// const car = {
//     type: "toyta",
//     model: "swift",
//     color: "red",
//     year: 2018,
// }
// console.log(car.year)


// const person = {}; // create empty object and then add objects one by one to it likethe next line 
// person.fname= "husnain";
// person.lname = "nawaz";
// person.age = 50;
// person.eyecolor = "red";
// console.log(person.age)


// const person = new Object({
//     firstname: "ali",
//     Age: 24,
//     hobby: "cricket",
// });
// console.log(person.hobby)


// const person = {
//     firstname:"Husnain",
//     lastname:"Nawaz", // lastnemfist naem age , fullname all are properties of object here and object is person 
//     age: 24,
//     fullname: function(){
//         return this.firstname+" "+this.lastname; 
//     } // this refers to the object's peroperties 
// };
// console.log(person.fullname())


// const person =  {
//     firstname:"Husnain",
//     lastname:"Nawaz", 
//     age: 24,
// }
// console.log(person.firstname)
// console.log(person["lastname"])


// const person =  {
//     firstname:"Husnain",
//     lastname:"Nawaz", 
//     age: 24,
// }
// let n1 = "firstname";
// let n2 = "lastname";

// let name = person.firstname+person.lastname;
// let name2 = person[n1]+person[n2];
// console.log(name)
// console.log(name2);

// person.nationality ="pakistani";
// console.log(person["nationality"])

// person.age = 12;
// console.log(person.age);

// delete person.age;
// console.log(person.age) // delet ethe age here so return undefined here

// delete person["age"];
// console.log(person.age)


// let result = ("firstname" in person);// check firstanme properrty is in the object person
// console.log(result)


//nested objects 
// const myobj = {
//     name: "Husnain",
//     age: 18,
//     hobby: "games",
//     object2: {
//         cars1: "toyota",
//         car2: "ferarri",
//         model: "2019",
//     }
// }
// console.log(myobj.object2.car2);


// const person ={
//     firstname: "john",
//     lastname: "nawaz",
//     id: 2345,
//     getID: function(){
//         idname = this.id;
//         return idname;
//     }
// }
// console.log(person.getID())

// // add function method from outside the object
// // person.name = function(){
// //     return this.firstname+" "+ this.lastname;
// // }
// // console.log(person.name())

// person.name = function(){
//     return (this.firstname+" "+this.lastname).toUpperCase();
// }
// console.log(person.name())


// // this keyword
// const person1 = {
//     name : "husnain",
//     age : 24,
//     data:function(){
//         return this.name +" "+ this.age;
//     }
// };
// const person2={
//     name: "Ali",
//     age: 18,
//     data: function(){
//         return this.name+" "+this.age;
//     }
// }
// console.log(person1.data())
// console.log(person2.data())
// //this is neccessay if i remove this from not just 2 but alos iun one objct it will not work error show up



// let x = this;
// console.log(x); // will hsow up object with blank bracket {}


// function myfunc(){
//     return this;
// }
// console.log(myfunc)



// const person = {
//     name: "husnain",
//     age : 30,
//     city : "lahore",
// };
// console.log(person);



// const person = {
//     name: "husnain",
//     age : 30,
//     city : "lahore",
//     hobby: function(){
//         return this.name+" "+this.age;
//     }
// };
// let text = "";
// for(let x in person){
//     text += person[x] + " ";
// }
// console.log(text);




// const person = {
//     name: "husnain",
//     age : 30,
//     city : "lahore",
// };
// const myarray = Object.values(person);
// console.log(person)
// console.log(myarray)



// let person = {
//     name: "husnain",
//     age : 30,
//     city : "lahore",
// };

// let text = "";
// for(let [key,value] of Object.entries(person)){
//     text+=key+" "+ value+" ";
// }
// console.log(text)

// let text = "";
// for(let [key,value] of Object.entries(person)){
//     console.log(`${key}  ${value}`)
// }


// convert objec in string in js
// const data= {
//     firstname: "husnain",
//     lastname: "nawaz",
//     age : 19,
//     city: "lahore",
// };
// let x = JSON.stringify(data);
// console.log(x);




// function person(first,last,age,color){
//     this.firstname= first;
//     this.lastname = last;
//     this.age= age;
//     this.eyecolor=color;
// }
// const myfather = new person("Nawaz","shaheen",50,"brown");
// console.log(myfather);




// x = 5;
// console.log(x)
// var x; // var canbe declare even after the fucntion called but not the let datatype

// x = 8;
// console.log(x)
// let x; // ket not allowed to declare after the function call but declare before 


// var x= 5;
// var y = 7;
// console.log(x+" "+y);


// var n = 6;
// console.log(n+" "+m);// value cant print because value and m not initialied here before printing it
// var m= 7;

// var n = 6;
// m= 7;
// console.log(n+" "+m); // this time m have value but later initialied so value can be pritable
// var m;


// var g= 7;
// var f;
// console.log(g,f); // f undefined still because value i szero means not initialized 1st so hoisted not 
// f=7;


// "use strict" // must use to declare x with some var let const to use otherwise give error because we are using usestrict it is used at the start 
// x=5;
// console.log(x)

// "use strict"
// function myfun(){
//     y=3;
//     return y;
// }
// console.log(myfun())


// "use strict"
// x = 5;
// console.log(x);


// "use strict";
// let x= {p1:100,p2:200};
// console.log(x)


// "use strict"
// let x = 3.14;
// delete x; /// delete cant be use in strict mode we cannot delete the variable in strict mode
// console.log(x);


// "use strict"
// function myfucn(p1,p2){return "hello"};
// console.log(myfucn())


// not allowed
// "use strict" 
// let x=010; //octal numeric numbers
// let y="\10"; //octal escape character

// const obj = {};
// Object.defineProperty(obj, "x",{value:7,writable:false});
// obj.x = 3.14;
// console.log(obj.x)

// const obj = {};
// Object.defineProperty(obj, "x",{value:9, Writable:false});
// console.log(obj.x)
// obj.x = 5; // channot change value to property x because it iis only readonly
// console.log(obj.x)


// //get only property
// "use strict"
// const obj = {get x(){ return 9}} //  allowed get function but not cahnging
// // obj.x = "4"; // not allowed to change in get fucntion
// console.log(obj.x)



// "use strict"
// delete Object.prototype;


// "uses strict"
// let eval = 3.14;
// console.log(eval) // eval keyword not working


// "use strict"
// let arguments = 3.14;
// console.log(arguments); // arguments already a keyword in js so cannot use as variable name



// const cars=["toytoa","volvo","bmw"];
// console.log(cars[1])


// const cars=[];
// cars[0] = "toyota";
// cars[2] = "bently";
// cars[3] = "samsung";
// let text="";
// for (let i= 0; i<cars.length;i++){
//     text+=cars[i];
// }
// console.log(text)


// const cars = new Array("Toayota","Audi","Honda");
// console.log(cars.toString())
// const cars2 = ["Toayota","Audi","Honda"];
// console.log(cars2)



// const cars = new Array("Toayota","Audi","Honda");
// console.log(cars[cars.length-1])


// const fruits= ["Banana", "Orange", "Apple", "Mango"];
// let text = "";
// for (let i = 0; i < fruits.length; i++) {
//     text +=fruits[i];
// }
// console.log(text)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.forEach(
//     function(bb){
//         console.log(bb);
//     }
// );


// adding array elemenets 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("kela");
// fruits[fruits.length]="amb";
// fruits.forEach(
//     function(bb){
//         console.log(bb);
//     }
// );


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toReversed();
// console.log(sorted)



// const points = [40, 100, 1, 5, 25, 10];
// let b = points.sort(function(a,b){return a-b})
// console.log(b)


const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a,b)=> b-a))
// console.log(points.sort(function() {return 0.7 - Math.random()}));
// for(let i=points.length-1; i>0; --i){
//     let j = Math.floor(Math.random()*(i+1))
//     let k = points[i];
//     points[i] = points[j];
//     points[j] = k;
// }
// console.log(points)


// function myarr(arr){
//     return Math.min.apply(null,arr);
// }
// console.log(myarr(points))


// function myarr(arr){
//     return Math.max.apply(null,arr)
// }
// console.log(myarr(points));


// function myarraymin(arr){
//     let len = arr.length;
//     let min = -Infinity;
//     while(len--){
//         if(arr[len]>min){
//             min = arr[len];
//         }
//     }
//     return min;
// }
// console.log(myarraymin(points));



// const cars = [
//     {type:"volvo", year :2016},
//     {type:"toyota", year :2020},
//       {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
// ]
// console.log(cars.sort(function(a,b){return a.year - b.year}))

// cars.sort(function(a,b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if(x<y){return -1}
//     if(x>y){return 1}
//     // return 0;
// })
// console.log(cars)
// console.log(cars[0].type)


// const myArr = [
//   {name:"X00",price:100 },
//   {name:"X01",price:100 },
//   {name:"X02",price:100 },
//   {name:"X03",price:100 },
//   {name:"X04",price:130 },
//   {name:"X05",price:110 },
//   {name:"X06",price:110 },
//   {name:"X07",price:110 },
//   {name:"X08",price:120 },
//   {name:"X09",price:120 },
//   {name:"X10",price:160 },
//   {name:"X11",price:120 },
//   {name:"X12",price:130 },
//   {name:"X13",price:130 },
//   {name:"X14",price:130 },
//   {name:"X15",price:130 },
//   {name:"X16",price:140 },
//   {name:"X17",price:140 },
//   {name:"X18",price:110 },
//   {name:"X19",price:140 }
// ];
// myArr.sort((p1,p2)=>{
//     if (p1.price < p2.price) return -1;
//     if (p1.price>p2.price) return 1;
//     return 0;
// });
// let text = "";

// function myfun(value){
//     text += value.name + "  " + value.price +" ";
// }
// myArr.forEach(myfun);
// console.log(text)


// const numbers = [45, 4, 9, 16, 25];
// let text = "";
// numbers.forEach(myfunction);
// function myfunction(value, index , array){
//     text += value +" "+index+" ["+array+"] \n";
// }
// console.log(text);


// const numbers1 = [45, 4, 9, 16, 25];

// function myfun(a){
//     return a*2;
// }
// const number2=numbers1.map(myfun);
// console.log(JSON.stringify(number2))
// console.log(number2)


// const myArr = [1, 2, 3, 4, 5, 6];
// const newarr = myArr.flatMap(x=>[x,x*3]);
// console.log(newarr);


// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myfun);
// function myfun(a){
//  return a>18;
// }
// console.log(over18);


// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myfun);
// function myfun(a,b,index,array){
//     return a+b;
// }
// console.log(sum)


// const numbers = [45, 4, 9, 16, 25];
// let allover18 = numbers.every(myfun);
// function myfun(a,b){
//     return a>18;
// }
// console.log(allover18)



// const numbers = [4, 24, 9, 16, 5];
// let over18 = numbers.some(myfun);

// function myfun(a){
//     return a>18;
// }
// console.log(over18);


// let text = "ABCDEDG";
// let v=Array.from(text);
// console.log(v);


// const myNumbers = [1,2,3,4];
// const myarr = Array.from(myNumbers,(a)=> a*3)
// console.log(myarr)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const key = fruits.keys();
// let text="";
// for (let x of key){
//     text+=x +"\n";
// }
// console.log(text);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f= fruits.entries();
// let text;
// for(let x of f){
//     text +=x+" \n";
// }
// console.log(text)


// const months = ["Januar", "Februar", "Mar", "April"];
// const mymonths = months.with(2,"march");
// console.log(mymonths)



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1,...arr2]
// console.log(arr3);



// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; //use to copy array
// console.log(arr1)



// const numbers = [23,55,21,87,56];
// let minvalue = Math.min(...numbers);
// let maxvalue = Math.max(...numbers);

// console.log(minvalue);
// console.log(maxvalue)



// const arr1 = [1,2,3,4,5,6,7,8];
// let a, rest;
// [a,...rest]= arr1;
// console.log(arr1)


// const arr1 = [1,2,3,4,5,6,7,8];
// let a,b,rest;
// [a,b,...rest]=arr1;
// console.log(rest);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text);

// let fruits = Array.of("Banana", "Orange", "Apple", "Mango");
// console.log(fruits);


// const numbers = [4, 9, 16, 25];
// console.log(numbers.map(Math.sqrt));

// Array.prototype.myucase = function(){
//     for (let i=0;i<fruits.length; i++){
//         this[i] = this[i].toUpperCase();
//     }
// };
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myucase();
// console.log(fruits)



// const letters = new Set(["a","b","c","d"]);
// console.log(letters.size)


// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters)


// const letters =  new Set();
// const a="a";
// const b="b";
// const c="c";
// letters.add(a);
// letters.add(b);
// letters.add("b");
// letters.add("b");
// letters.add(c);
// console.log(letters)



// const letters = new Set(["a","b","c"]);
// let text = "";
// for (const x of letters){
//     text+=x+"\n";
// }
// console.log(text)



// const letters =  new Set(["a","b","c"]);

// console.log(letters instanceof Object)
// console.log(letters.has("d"));
// console.log(letters.has("b")) // yes b is in letters

// let text="";
// letters.forEach(function(a){
//     text+=a+"\n";
// });
// console.log(text)


// let text="";
// for(const x of letters.values()){
//     text+=x+"\n";
// }
// console.log(text)


// let text="";
// for(let i of letters.keys()){
//     text+=i+"\n";
// }
// console.log(text)


// let text="";
// for(const g of letters.entries()){
//     text+=g+"\n";
// }
// console.log(text);


// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d']);
// console.log(A.intersection(B));
// console.log(A.union(B));
// console.log(A.difference(B));
// console.log(A.symmetricDifference(B));
// console.log(A.isSubsetOf(B)); // false becasue all A elemnets are not in B 
// console.log(A.isDisjointFrom(B)); // if A have no elements which is in B


// let myset = new WeakSet();
// let myobj = {fname:"ali", lname:"nawaz"};
// let v = myset.add(myobj);
// console.log(v)
// // myset.delete(myobj) // delete this than it will give false in has 
// console.log(myset.has(myobj));  
// // console.log(myobj instanceof Object);
// myobj = null; // after the all program run i give null value which means all the vlaue assigned in prgrams now rmeoved and will be garbage collected in memory
// in weakset no primitive values allowed - only objects allowed



// let text = "";
// const person = new WeakSet();
// let ali  = {name:"ali",age:23};
// let husnain = {name:"husnain", age:24};
// let musa = {name: "musa", age:22};
// let aleena ={name: "aleena", age: 19};

// track(ali);
// track(musa);
// track(husnain);
// track(ali);
// function track(visitor){
//     if(person.has(visitor)){
//         text+=visitor.name+"visited already\n ";
//     }
//     else{
//         person.add(visitor);
//         text+=visitor.name+" age is "+visitor.age+" visted 1st time \n";
//     }
// }
// console.log(text)



// const fruits = new Map();
// console.log(cars);
// fruits.set("kela",500);
// fruits.set("malta",66);
// fruits.set("malta",88);// first matla ignnored andf only one time it will show in output
// fruits.set("kela",22);
// fruits.set("amb",999);
// console.log(fruits)

// const cars = new Map([
//     ["apple", 500],
//     ["mango",900],
//     ["guava",200]
// ]);
// console.log(cars.get("apple"))
// cars.set("kela",100);
// console.log(cars)
// cars.set("apple",333) // chnage value from 500 to 333
// console.log(cars)
// console.log(typeof cars);
// console.log(cars instanceof Map); //trur also for object too



// const fruits = new Map([
//     ["apple", 500],
//     ["mango",900],
//     ["guava",200]
// ]);

// console.log(fruits.size);
// fruits.delete("apple");
// console.log(fruits)
// fruits.clear(); // retue=rn mao but {0}
// console.log(fruits);
// console.log(fruits.has("apple")); //true if delet than false
// fruits.delete("apple")
// console.log(fruits)
// console.log(fruits.has("apple"))

// let text ="";
// fruits.forEach(
//     function(a,b){
//         text+=a+" "+ b +" \n";
//     }
// )
// console.log(text);


// let text = "";
// for (const x of fruits.entries()){
//     text+=x+" \n";
// }
// console.log(text)



// let text = "";
// for (const x of fruits.keys()){
//     text+=x+" \n";
// }
// console.log(text)


// let text = "";
// for (const x of fruits.values()){
//     text+=x+" \n";
// }
// console.log(text)


// let text = 0;
// for (const x of fruits.values()){
//     text+=x; // remove "\n" means no string values must be sum as text value assigned to 0
// }
// console.log(text)


// const apples =  {name:"apples1"};
// const bananas = {name: 'Bananas2'};
// const oranges = {name: 'Oranges3'};

// const fruis = new Map();

// fruis.set(apples, 500);
// fruis.set(bananas,60);
// fruis.set(oranges,44)
// console.log(fruis)


// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];
// function check({quantity}){
//     return quantity>200 ? "ok" : "low";
// }
// let v = Map.groupBy(fruits, check);
// let text="";
// for (let x of v.get("ok")){
//     text+=x.name +" "+x.quantity+" \n";
// }
// for(let x of v.get("low")){
//     text+=x.name+" "+x.quantity+" \n";
// }
// console.log(text)


// let num=3.14159;
// let text=num.toLocaleString("en-US",{
//     minimumFractionDigits: 1,
//     minimumFractionDigits: 1,
// });
// console.log(text)


// let date =  new Date();

// let text = date.toLocaleString("en-US",{
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
// })
// console.log(text);



// function filesize(bytes){
//     if(bytes<1024){
//         return bytes+" bytes";
//     }
//     if (bytes<1024*1024){
//         return (bytes / 1024).toLocaleString("en-US", {maximumFractionDigits: 1}) + " KB";    
//     }
//     return(bytes/(1024*1024).toFixed(1)+"MB");
// }
// let size = 1000000;
// console.log(filesize(size));



// const dates = [
//     new Date("2026-01-01"),
//     new Date("2026-12-24"),
// ];
// let text = dates.toLocaleString("en-US")
// console.log(text);


// const person = {
//     firstanme: "husnain",
// }
// let{firstanme, country="Pakistan"} = person;
// console.log(country)


// function greet(){
//     console.log(this.name);
// }
// const person = {
//     name : "ali"
// }
// greet.call(person);



// function sum(a,b){
//     console.log(a+b);
// }
// sum.apply(null,[5,10]);


// console.log(this)


// function show(){
//     console.log(this.name);
// }
// const p1= {name:"Asli"};
// const p2= {name:"naqli"};
// const fn = show.bind(p1); // asli output aye ge kun ky bind ki priority ziada ha call sy
// fn.call(p2);



// const person = {
//     name: "john",
//     getname : function(){
//         return this.name;
//     }
// };
// let v = person.getname();
// console.log(v)


// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// const c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());


// const numbers = [10,20,30];
// numbers.forEach(numbers=>{
//     console.log(numbers);
// })


// const users = [
//     {name: "Ali"},
//     {name: "sara"}
// ];
// users.forEach(users=>{
//     console.log(users.name)
// })

// const transactions = [
//   { patient: "Ali Khan", amount: 5000 },
//   { patient: "Sara Ahmed", amount: 3200 },
//   { patient: "Usman Malik", amount: 4500 }
// ];
// transactions.forEach(transactions =>{
//     console.log(transactions);
// })






// const transactions = [
//   { patient: "Ali Khan", amount: 5000 },
//   { patient: "Sara Ahmed", amount: 3200 },
//   { patient: "Usman Malik", amount: 4500 },
//   { patient: "Ayesha Noor", amount: 2800 },
//   { patient: "Ali Khan", amount: 1500 },
//   { patient: "Sara Ahmed", amount: 4000 },
//   { patient: "Ali Khan", amount: 2200 }
// ];
// const revenue={};
// transactions.forEach(transaction=>{
//     if(revenue[transaction.patient]){
//         revenue[transaction.patient]+=transaction.amount;
//     }
//     else{
//         revenue[transaction.patient]=transaction.amount;
//     }
// })
// console.log(revenue);
// let revenue={};
// transactions.forEach(transaction=>{
//     if(revenue[transaction.patient]){
//         revenue[transaction.patient]+=transaction.amount;
//     }
//     else{
//         revenue[transaction.patient]=transaction.amount;
//     }
// });
// let maxamunt = 0;
// let maxpatient = "";
// for(let patient in revenue){
//     if(revenue[patient]>maxamunt){
//         maxamunt = revenue[patient];
//         maxpatient = patient;
//     }
// }
// console.log(maxpatient+" "+maxamunt);


// let total=0;
// let count=0;
// for(let patient in revenue){
//     total+=revenue[patient];
//     count++;
// }
// let average = total/count;
// console.log(average)

// async wait better ha priomise sy or promise better ha call back hell sy
// syschronous - ka matlab ha code step by step one by one line heriarchy ky hisab sy chaly ga wait nahi krva sakty ya skip nahi krsakty kuxh lines is ma

 
// setTimeout(()=>{
//     console.log("hello");
// },4000)

 
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){ // sumcallback yahan kuxh b likh sakty  thy or ya sum ha or sum ki sar ivalues jo b sum ky function ma ha ly raha ha
//     sumcallback(a,b)
// }
// calculator(1,3,sum) // sum ab aik callback ban gya ha tp is ko bahgair () ky pass krty han

// function calculator(a,b, callback){
//     callback(a,b)
// }

// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });

// const hello = ()=>{
//     console.log("hello");
// }
// setTimeout(hello,3000)
// // 

// function getdata(dataid){
//     setTimeout(()=>{
//         console.log("data",dataid);
//     },2000)
// }

// getdata(1);
// getdata(2);
// getdata(3);


// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000)
// }
// getdata(1,()=>{
//     getdata(2);
// })



// function datadelay(id,undarwalafun){ // undesrwala fun yahan function ky tor par use ho raha ha jo ham ny nichy expression wala function bnaya ha jis ma 2 value de ha
//     setTimeout(()=>{
//         console.log("data",id);
//         if (undarwalafun) {
//             undarwalafun();
//         }
//     },2000)
// }
// datadelay(1,()=>{ // ya jo khali fuction ha ya sara funtion he stor ho gyaha underwala fun ma jo uper sab sy upper line ma ha
//     datadelay(2);
// }) 

// function datadelay(id,underwalafun){ // parmater variables han
//     setTimeout(()=>{ // () inner callbacjk ha
//         console.log("data",id);
//         if(underwalafun){  
//             underwalafun();
//         }
//     },2000);
// }
// datadelay(1,()=>{ // ya () wala function callback ha yahan
//     datadelay(2, function(){
//         datadelay(3);
//     }); // ya rguments ha or ya call backs han
// }) // ya () function yahan outer call back ha 



// function datadelay(id,callbackfun){
//     setTimeout(()=>{
//         console.log(id);
//         if(callbackfun){ // callbackfun = ha ()=>{datadelay(2);}
//             callbackfun(); // callbackfun() = ha datadelay(2);
//         }
//     },2000);
// }

// datadelay(1,()=>{
//     datadelay(2,()=>{
//         datadelay(3)
//     });
// })



// function datadelay(id,callbackfun){
//     setTimeout(()=>{
//         console.log(id);
//         if(callbackfun){ 
//             callbackfun();
//         }
//     },2000);
// }

// datadelay(1,()=>{
//     datadelay(2*4,()=>{
//         datadelay(3)
//     });
// })



// function process(callbackfun){
//     let result = callbackfun();
//     console.log(result);
// }

// process(function(){ // ya function aik callback ha or = ha callbackfun ky or varible ki trha treat ho rha ha idhr
//     return 100;
// })


// function repeat(callbackfun){
//     callbackfun();
//     callbackfun();
//     callbackfun();
// }
// repeat(function(){
//     console.log(100);
// })

// function parametervalues(callbackhere){
//     let name="husnain";
//     callbackhere(name);
// }
// parametervalues(function(user){
//     console.log(user)
// })


// callback hell - kya ha nested callbacks
// callback hell ki problem ko solve krny ky liye ata ha promises



// class car{
//     constructor(brand,color){
//         this.brand = brand;
//         this.color = color;
//     }
//     start(){
//         console.log("car started");
//     }
// }
// const car1 = new car("Toyota","white");
// car1.start();

// class student{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(" hello meri jan ",this.name)
//     }
// }
// const student1 = new student("husnain");
// student1.greet();


// class Animal{
//     eat(){
//         console.log(" I eat");
//     }
// }
// class dog extends Animal{
//     bark(){
//         console.log(" I bark too");
//     }
// }
// const d= new dog;
// d.eat();
// d.bark();


// class bankaccounnt{
//     constructor(amount,name){
//         this.amount = amount;
//         this.name = name;
//     }
//     showbalance(){
//         console.log(this.name+" balance is "+this.amount);
//     }
// }
// const p = new bankaccounnt("husnain",12000);
// p.showbalance();



// import promptSync from "prompt-sync";
// const prompt = promptSync();
const prompt = require("prompt-sync")(); // npm package  used to get input and parse output's in node.js not the browser
// class student {
//     constructor(name,marks){
//         this.name = name;
//         this.marks = marks;
//     }
//     showresult(){
//         console.log("name: ",this.name);
//         console.log("marks",this.marks);
//         if(this.marks>=33){
//             console.log("pass")
//         }else{
//             console.log("faail")
//         }
//     }
// }
// const name1 = prompt(" eneter name : ")
// const age1 = Number(prompt(" Eneter age: "))
// const s1 = new student(name1,age1);
// s1.showresult();


// class product {
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     discount(percent){
//         console.log(this.price - (this.price * percent/100))
//     }
// }
// const productname = prompt(" what is name of product: ");
// const price = Number(prompt("Price: "));
// const discount = Number(prompt("discount in %: "));
// const product1 = new product(productname,price);
// product1.discount(discount);



// class Student {
//         constructor(name, marks) {
//         this.name = name;
//         this.marks = marks;
//     }
// }
// const student = [];
// for(let i=0; i<3; i++){
//     const name= prompt(" name: ");
//     const marks = Number(prompt("marks: "));
//     student.push(name,marks);
// }
// console.log(student);










