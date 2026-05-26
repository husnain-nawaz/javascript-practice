  
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



































