  
// let v;
// function multiply(a,b){
//     v = a*b;
//     return v;
// }
// let result = multiply(3,5);
// console.log(result);


// const { use } = require("react");


// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");


// const { createContext } = require("react");

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

// const data= {
//     firstname: "husnain",
//     lastname: "nawaz",
//     age : 19,
//     city: "lahore",
// };
// let x = JSON.stringify(data);
// console.log(x);

/// this code work with react otherwose throw error 


// function person(first,last,age,color){
//     this.firstname= first;
//     this.lastname = last;
//     this.age= age;
//     this.eyecolor=color;
//     this.nationality = "paksitani";
// }
// const myfather = new person("Nawaz","shaheen",50,"brown");
// console.log(myfather.age);
// const myson = new person("musa","husnain",5,"blue");
// console.log(myfather.nationality)
// myfather.nationality="English";
// console.log(myfather.nationality)


// //cannt add new property in person here when use constructor objects
// person.games = "hockey";
// console.log(myfather.games); // give undefined because not alloed to adds new peoperty in main object constructor


// // but if somonereallay wana add the property in object constructor than we have to use the prototype function their 
// person.prototype.games = "cricket";// now objects created with main object fuction like myfather or myson can get access of the games property because it has been added to person by prototype 
// console.log(myfather.games)




// function person(firt,last,age){
//     this.firstname = firt;
//     this.lastname = last;
//     this.age = this.age;
//     this.nationality = "pakistani";
//     this.fullname = function () {
//         return this.firstname +" "+ this.lastname;
//     }
// }
// let myfather = new person("nawaz","shaheen",19);
// let mymother = new person("sushi","rathore",31);
// let myson = new person("musa","kamal",3);


// myfather.game = "hockey";
// console.log(myfather.game)
// person.movie = "jalak dikhla ja";
// console.log(person.movie)
// console.log(myfather.movie) // undefined
// person.prototype.hobby = "reading";
// console.log(myfather.hobby)

// console.log(myfather.fullname());
// adding a methid to an object 

// mymother.lastname = function(){
//     this.lastname = "kaur";
//     return this.lastname;
// }
// console.log(mymother.lastname())

// adding this method to object 
// mymother.changename = function(name2){
//     this.lastname = name2;
// }
// mymother.changename("jenny");
// console.log(mymother.lastname)

// myfather.changename("rana"); // not work because change methood is only for mymother
// console.log(myfather.lastname)


// and if i wann the change funtion to be able to used by all newly created object like myfather than i have to craeteby using prototype

// person.prototype.changename = function(namechan){
//     this.lastname = namechan;    
// }
// myson.changename("kaysar");
// myfather.changename("chaudhry");
// console.log(myson.lastname);
// console.log(myfather.lastname)



//built in javscipt constructors

// console.log(typeof new Object());
// console.log(typeof new Array());
// console.log(typeof new Map());
// console.log(typeof new Set());
// console.log(typeof new Date());
// console.log(typeof new RegExp());
// console.log(typeof new Function());


// let myMap= new Map();
// let obj = {fname:"husnain",lname:"Nawaz"};
// myMap.set(obj,"player");
// console.log(myMap.get(obj))
// console.log(myMap)


// let text="";
// const vistcount = new WeakMap();
// const john ={name:"john", age:41};
// const paul = {name:"Paul", age:41};
// const Ringo = {name:"Ringo", age:42};
// const George = {name:"George", age:43};

// track(paul);
// track(Ringo);
// track(paul);
// track(paul);
// track(john);

// function track(a){
//     let count = vistcount.get(a) || 0;
//     count++;
//     vistcount.set(a,count);
//     text+=a.name+" "+a.age+" visted "+count+" \n";
// }
// console.log(text)



// const person = {fname:"John", lname:"Doe", age:25};
// let text="";
// for(let i in person){
//     text+=person[i];
// }
// console.log(text)



// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);
// let text = "";
// for(let x of fruits){
//     text+=x;
// }
// console.log(text)


// function mynum(){
//     let n=0;
//     return{
//         next: function(){
//             n+=10;
//             return {value:n, done:true}
//         }
//     };
// }
// const n = mynum();
// n.next();
// n.next();
// n.next();
// n.next();
// n.next();
// n.next();
// n.next();
// n.next();
// console.log(n.next().value)



// mynum = {};
// mynum[Symbol.iterator] = function(){
//     let n=0;
//     done = false;
//     return{
//         next(){
//             n+=10;
//             if(n==100){done = true}
//             return {value:n,done:done}
//         }
//     }
// }
// let text="";
// for (const num of mynum){
//     text+=num+" \n";
// }
// console.log(text)

// let iterator = mynum[Symbol.iterator]();
// let text = "";
// while(true){
//     const result = iterator.next();
//     if(result.done) break;
//     text+=result.value+" \n";
// }
// console.log(text)



// const myIterator = Iterator.from([1, 2, 3]);
// let text = "";
// for (const x of myIterator){
//     text += x;
// }
// console.log(text)



// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);
// let v = myIterator.drop(5);
// let text="";
// for (const x of v){
//     text+=x;
// }
// console.log(text)



// const myIterator = Iterator.from("234566789");
// let result = myIterator.every(x=>x>1);
// console.log(result)


// const myiterator =  Iterator.from([32,33,16,40]);
// const filtered = myiterator.filter(x=>x>18);
// let text ="";
// for(const x of filtered){
//     text+=x+"\n";
// }
// console.log(text)


// const myiterator= Iterator.from([3, 10, 18, 30, 20]);
// let rseult = myiterator.find(x=>x>=18);
// console.log(rseult) //fist iteration that gives true value



// const myiterator = Iterator.from([1,2,3,4,5,6,7]);
// const mapeed = myiterator.flatMap(x=>[x,x*10]);
// let text = "";
// for (const x of mapeed){
//     text+=x+" \n";
// }
// console.log(text);


// const myiterator= Iterator.from("123456789");
// let text="";
// myiterator.forEach(x=> text+=x)
// console.log(text)



// const myiterator = Iterator.from("123456789");
// const mapped = myiterator.map(x=>x*2)
// let text = "";
// for (let n of mapped){
//     text+=n+"\n";
// }
// console.log(text)


// function myfun(total,sum){
//     return total+sum;
// }
// const myiterator = Iterator.from([175, 50, 25]);
// let result = myiterator.reduce(myfun);
// console.log(result)



// const myiterator = Iterator.from("123456789");
// let pass1= myiterator.some(x=>x>7);
// console.log(pass1);



// const myiterator = Iterator.from([1,2,3,4,5,6,7,8,9]);
// const first5 = myiterator.take(5);
// let text = "";
// for(let i of first5){
//     text+=i;
// }
// console.log(text)


// function* mystream(){
//     yield 1;
//     yield 2;
//     return 3;
// }
// let mygenerator = mystream();
// let text="";
// for(let value of mygenerator){
//     text+=value;
// }
// console.log(text)


// console.log(Math.exp);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);


// console.log(Math.round(34.2432));
// console.log(Math.ceil(-43.244));
// console.log(Math.floor(-432.333));
// console.log(Math.trunc(9432.3456));
// console.log(Math.sign(0))
// console.log(Math.pow(8,2));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-43.33));
// console.log(Math.sin(90));
// console.log(Math.cos(0*Math.PI/180));
// console.log(Math.min(0,15,55,3,75,-66,43,0));
// console.log(Math.max(0,15,55,3,75,-66,43,0));
// console.log(Math.random());
// console.log(Math.log(10));
// console.log(Math.log2(8));
// console.log(Math.log10(1000));
// console.log(Math.acos(-1));
// console.log(Math.acosh(1));
// console.log(Math.asin(-1));
// console.log(Math.atan(2));
// console.log(Math.atan2(8,4));
// console.log(Math.tan(2).toFixed(2));
// let degree = 60;
// let randians=degree*Math.PI/180;
// console.log(Math.tan(randians));
// console.log(Math.E);
// console.log(Math.floor(Math.random()*100));

// function getrandoom(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
// }
// console.log(getrandoom(0,33))



// let text = "Visit W3Schools!"; 
// const n = text.match(/W3Schools/,"Husnain");
// console.log(n);


// let text = "Visit W3Schools!"; 
// const n = text.search(/W3Schools/,"Husnain");
// console.log(n);


// let text = "Black, white, red, Green, blue, yellow.";
// let result = text.match(/red|green|blue/g);
// let result = text.match(/red|green|blue/i);
// let result = text.match(/red|green|blue/ig);
// let result = text.match(/red|green|blue/u);
// console.log(result)


// let text = "Give me 100%!";
// const pattern = /\d/g;
// console.log(text.match(pattern));


// let text = "Give me 100%!";
// const pattern = /\w/g;
// console.log(text.match(pattern));


// let text = "1,100 or 10000?"
// const pattern = /10?/; // 0 ya 1 bar just
// const pattern = /10*/;  // 10 - 0 ya us sy ziadabar a sakty ha chahy jitni marzi bar 
// const pattern = /10+/; // 10 - kam sy kam aik bar hona chaiye us sy agy jitni bar marzi ho 
// console.log(text.match(pattern));


// const pattern = /^w3schools/i;
// let text = "w3Schools tutorial";
// console.log(pattern.test(text));


// const pattern = /w3schools$/i;
// let text = "tutorial w3Schools";
// console.log(pattern.test(text));


// let text = "MOre than 1000 times bro";
// let pattern = /[0-9]/g; // match 0 to 9 integers in text string
// let pattern = /[a+]/;
// console.log(text.match(pattern));


// let text = "aaaaaaaaaab";
// const pattern = /(aa)(bb)/d;
// let result=text.match(pattern);
// console.log(JSON.stringify(result));
// console.log(JSON.stringify(result.indices));






// function createcounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// const addtocart =  createcounter();
// console.log(addtocart());
// console.log(addtocart());
// console.log(addtocart());



// function createuser(){
//     let password = "1234567";
//     return {
//         checkpassword(pass){
//             return pass === password;
//         }
//     }
// }
// const user = createuser();
// console.log(user.checkpassword("1234567"))
// // console.log(password)// passwordd acnot acess directly its unders the function



// function createbankaccount (){
//     let balance = 1000;
//     return{
//         getbalance(){
//             return balance;
//         },
//         Deposit (amount){
//             balance+=amount;
//         }
//     }
// }
// let users = createbankaccount();
// console.log(users.Deposit())



// function createcart(){
//     let totalitems = 0;
//     return {
//         additem(){
//             totalitems++;
//             return totalitems;
//         }
//     }
// }
// let users = createcart();
// console.log(users.additem())
// console.log(users.additem())
// console.log(users.additem())



// function craetelimiter(){
//     let clicks = 0;
//     let limitexceed =false;
//     return function(){
//         if(limitexceed) return;
//         clicks++;
//         if(clicks>5){
//             limitexceed = true;
//             console.log("limit axceed")
//             return;
//         }
//         console.log(clicks)
//     };
// }
// let users =  craetelimiter();
// users();
// users();
// users();
// users();
// users();
// users();
// users();
// users();


// function add(){
//     let counter= 0;
//     counter++;
//     return counter;
// }
// let x=0;
// x = add();
// x = add();
// x = add();
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);



// function createcounter(){
//     let counter= 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }
// let add = createcounter();
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


// function add(){
//     let count = 0;
//     function plus(){
//         count++;
//     }
//     plus();
//     return count;
// }
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())


// function mycounter(){
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     };
// }
// const add = mycounter();
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());



// const user ={
//     name: 'Ali',
//     sayhello(){
//         console.log(this.name); // ore we can write user.name becuase here this is user
//     }
// };
// console.log(user.sayhello())


// function greet(){
//     console.log(this.name);
// }
// const user = { // objcet ha ya 
//     name: "Ali"
// };
// const user2 = { // objcet ha ya 
//     name: "Musa"
// };
// console.log(greet.call(user2))


// function greet(city){
//     console.log(this.name, city);
// }
// const user = {
//     name: "husnain",
// }
// let v = greet.apply(user,["lahore"]);
// console.log(v)



// function greet(){
//     console.log(this.name);
// }
// const user = {
//     name: "Husnain"
// };
// const newfun = greet.bind(user);
// console.log(newfun())


// const user = {
//     name: "Ali"
// };
// function showname(){
//     console.log(this.name)
// };
// setTimeout(showname.bind(user),1000);


// const person = {
//     name : "john",
//     getname: function(){
//         return this.name;
//     }
// };
// // let a = person.getname();
// const getname = person.getname;
// // console.log(a);
// console.log(getname())



// const person = {
//     name: "husnain"
// };
// function getname(){
//     return this.name;
// }
// console.log(getname.call(person));



// function add(a,b){
//     return a+b;
// }
// let g = add.apply(null,[4,5])
// console.log(g)


// const gethusnian = GPUQuerySet.bind(person);

// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count;
//     };
// }
// const c = counter();
// console.log(c());
// console.log(c());


// function outer(){
//     let name = "husnain";
//     return function g(){
//         console.log(this.name); // ya name variable destroy nahi ho ga kun ky closure ky function ma ha otherwie destroy kr daity hn normal function call krny pr
//     };
// }
// let n = outer.g();
// console.log(n);


// //privat escope what ? IIFE
// let result = (function(){
//     let secret = "123456";
//     return secret;// return ky bgair value rsuy ha 124345 ki jagha undefined  a jatye ge
// })();
// console.log(result);



// function outer (){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// console.log(outer().call(count));



// const person ={
//     firstname:"husnian",
//     lastname: "nawaz",
//     age: 18
// };
// console.log(person.firstname)


// const person = new Object();
// person.firstname = "husnain";
// person.lastname = "nawaz";
// person.age = 22;
// console.log(person)



// const user = {
//     name: "ali",
//     age : 222,
// }
// const extrainfo = {
//     city: "lahore"
// };
// Object.assign(user,extrainfo);
// console.log(user)


// const person = {
//     greet(){
//         console.log("hello");
//     }
// };
// const user = Object.create(person);
// user.name = "ali";
// console.log(user.name)
// user.greet();


// let a = 10;
// let b=a;
// b=50;
// console.log(a);
// console.log(b);


// const data = [
//     ["name", "Ali"],
//     ["age",22]
// ];
// const user = Object.fromEntries(data);
// console.log(user);


// const person = {
//     age: 10,
// };
// const x = person;
// x.age = 50;
// console.log(person.age)


// const person = {
//     name: "ali",
//     age : 33,
// };
// const copy = {...person};
// copy.age = 11;
// console.log(copy.age)


// const user = {
//     name: "ali",
//     age : 22,
// };
// const upadte ={
//     ...user,
//     age : 11,
// }
// console.log(user)
// console.log(upadte)


// const person = {
//     firstname :"husnain",
//     lastname : "nawaz",
//     fullname(){
//         return this.firstname+" "+this.lastname;
//     }
// };
// console.log(person.fullname())


// const product = {
//     name: "alptop",
//     price : 10000,
//     showproduct(){
//         console.log(this.name);
//         console.log(this.price);
//     }
// };
// console.log(product.showproduct())


// const person1 = {
//     firstname: "ali",
//     lastname: "khan",
// };
// const person2 = {
//     firstname: "husnain",
//     lastname: "nawaz",
// }
// function fullname(){
//     return this.firstname+" "+ this.lastname;
// }
// console.log(fullname.call(person1))


// const person = {
//     firstname : "ali",
//     lastname : "khan",
//     fullname(){
//         return this.firstname+" "+ this.lastname;
//     }
// };
// const member = {
//     firstname: "husnian",
//     lastname: "nawaz",
// };
// let fullname = person.fullname.bind(member);
// console.log(fullname())


// const user ={
//     name: "Ali",
//     age : 22,
//     city : "lahore"
// };
// // console.log(Object.keys(user))
// // console.log(Object.entries(user))
// console.log(Object.values(user))
// for(let [key,value] of Object.entries(user)){
//     console.log(key,value)
// }

// const errors = {
//     email: "required",
//     Password : "too short",
// };
// Object.entries(errors).map(([field,message]) => {
//     console.log(field,message);
// });


// const user = {
//   name: "Ali",
//   age: 22,
//   city: "Lahore"
// };
// for(let key in user){
//     console.log(key);
// }


// const user = {
//     name:"ali",
// }
// let key = "name";
// console.log(user[key])



// const user = {
//     name: "ali",
// };
// const extra = {
//     age : 22
// };
// Object.assign(user,extra);
// console.log(user)


// const data = [
//     ["name","husnain"],
//     ["age", 23]
// ];
// const user = Object.fromEntries(data);
// console.log(user)



// const user = {
//     name : "husnain",
//     age: 22,
// };
// const result = Object.fromEntries(
//     Object.entries(user).filter(([key,value])=>{
//         return key !=="age";
//     })
// );
// console.log(result)


// const products = [
//     {name:"laptop", category: "electronics"},
//     {name: "phone", category: "electronics"},
//     {name: "shirt", category: "clothes"},
// ];
// const grouped = Object.groupBy(
//     products,
//     a => a.category
// );
// console.log(grouped);


// const person = {
//     firstname : "ali",
//     lastname : "khan",
//     get fullname(){
//         return this.firstname+" "+this.lastname;
//     }
// };
// console.log(person.fullname)


// const user = {
//   firstName: "Ali",
//   lastName: "Khan",
//     get fullname(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// console.log(user.fullname);


// const user = {
//   name: "",

//   set username(value) {
//     this.name = value.toUpperCase();
//   }
// };
// user.username = "ali";
// console.log(user.name);


// const user = {
//     firstname : "",
//     lastname : "",
//     set fullname(value){
//         const parts =  value.split(" ");
//         this.firstname = parts[0];
//         this.lastname = parts[1];
//     },
//     get fullname(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// user.fullname = "ali khan";
// console.log(user.firstname)
// console.log(user.lastname)
// console.log(user.fullname)



// const user ={
//     age : 0,
//     set userage(value){
//         if(value<0){
//             console.log("invalid age");
//             return
//         }
//         this.age = value;
//         console.log(this.age)
//     }
// };
// user.userage = 95;


// -------------------------------------


// var name = "husnain"; // better to use let and const if dont wanna chnage value later
// console.log(name);

// let age = 24;
// console.log(age);

// const city = "lahore";
// console.log(city);

// let isStudent = true;
// const isStudent = false;
// console.log(isStudent)
// console.log(isStudent)

// const country = "pakistan";
// console.log(country)


// var price = 100;
// var quantity = 5;
// total = price*quantity;
// console.log(total);

// var salary = 50000;
// var bonus = 10000;

// var firstName, lastName;
// console.log(fullName = firstName+" "+lastName)

// let favoriteColor= "Hello World";
// console.log(favoriteColor) 

// let hasLicense = true; // 1
// let isLoggedIn = false; // 0


// let fruits = ["apple","mango","guava"];
// let numbers = [1,2,3,4,6];
// let person = {
//     name: "musa",
//     age: 22,
// }
// let car ={
//     brand : "toyota",
//     model : "corolla",
//     year : 2017
// }


// var score = 80;

// let score = 51;
// let passed = score>=50;
// console.log(passed)

// var temprature = 30;
// let message = "Today is a good day";


// let a =30, b=10,x;
// x=a;
// a=b;
// console.log(" a : "+a," b : "+x)
// both are true
// let a= 10, b = 15;
// [a,b] = [b,a];
// console.log(" a : "+a," b : "+b)

// ---------------------------------------------


// const person = {
//     name: "Ali"
// };
// console.log(person.name);



// const person = {
//   name: "Ali"
// };

// Object.defineProperty(person, "age", {
//   value: 25,
//   enumerable: true, // is waja sy 25 output ma show ho ga 
// });

// console.log(person);

// {
//   writable: false,
//   enumerable: false, 
//   configurable: false
// }



// const person = {
//     name : "ali"
// };
// Object.defineProperty(person,"name",{
//     writable: false
// })
// person.name = "ahmed"; // writeble false ki waja sy is ko change nahi kr sakty ab
// console.log(person.name)


// const person = {
//     name: "ali",
//     age : 24,
// }
// Object.defineProperty(person, "age",{
//     enumerable: false, // is enumerable sy age show he nahi ho ge output ha halan ky ya aik property ha object ki
// })
// console.log(Object.keys(person))


// const person = {
//     name: "ali",
//     age: 25,
// };
// Object.defineProperty(person, "age", {
//     enumerable: false
// })
// console.log(Object.keys(person));
// console.log(Object.getOwnPropertyNames(person)) // y asab properties daita ha even false he kun na ho enumerbale for that property


// const person = {
//     firstname: "ali",
//     lastname : "khan",
// };
// Object.defineProperty(person,"fullname",{
//     get(){
//         return this.firstname+" "+this.lastname;
//     }
// });
// console.log(person.fullname)



// const product= {
//     title : "laptop",
//     price : 1000,
// };
// Object.defineProperty(product,"discountprice",{
//     get(){
//         return this.price -100;
//     }
// });
// console.log(product.discountprice);



// const person = {
//     name: "husnain"
// };
// Object.preventExtensions(person);
// person.age =33; // ya dd he nahi ho ga kun ky preventextension lga kr han sy person objcet ko restrcit kr dia ha ky koi b new property add kry to nahi krny daini 
// console.log(person)
// person.name = "musa"; // lekin change zaroor kr sakty han existing wali
// console.log(person)
// delete person.name; // delet b kr sakty han
// console.log(person)


// const person = {
//     name: "Ali",
//     age : 20
// };
// Object.seal(person)
// person.city = "lahore";
// console.log(person)
// delete person.name; // nahi kr sakty kuxh nahi ho ga
// console.log(person)

// person.age = 30; // lakin han value zaroor change kr sakty han seal ma 
// console.log(person.age)
// console.log(person)


// const person = {
//     name: "ali",
//     age: 25,
// };
// Object.freeze(person); // us sy kuch nahi kr sakty person ma na delet ekis i property ko na chnage na new property bahir likh sakty kuch b nahi
// person.age = 12;
// person.city = "lahore";
// delete person.age;
// console.log(person)


// const person = {
//     name: "Alsi"
// };
// Object.freeze(person);
// console.log(Object.isFrozen(person)) // return true if we have used freeze already true / false 


// const config = Object.freeze({
//     API_URL : "https://api.com",
//     VERSION: "1.0.0",
// });
// config.API_URL = "hack.com"; // ya change nahi ho ga kun ky freez ma pebly wali api likh rakhi ha 
// console.log(config.API_URL)



// function person(name){
//     this.name = name;
//     this.sayhello = function(){
//         console.log("Hello"+this.name);
//     }
// }
// const user1 = new person("Ali");
// const user2 = new person("Ahmed");
// console.log(user1.name)
// console.log(user2.name)
// console.log(user1.sayhello === user2.sayhello) // false dy ga kun ky  user 1 wala or user2 wala function alag ban gy ha andar kun ky copy bna li ha user1 or 2 dono ny 


// uper wala simple tha ab prototype sy bnanay lagy han

// function person(name){
//     this.name = name;
// }
// person.prototype.sayhello = function(){
//     console.log("Hello : "+ this.name);
// };
// const user1 = new person("husnian");
// const user2 = new person("musa bhai");
// // console.log(user1.name); // simple 
// // console.log(user2.name); // simple one
// // console.log(user1.sayhello());
// // console.log(user2.sayhello());
// console.log(user1.sayhello === user2.sayhello) // true aye ga kun ky ya aik he function sy ly raha ha na ky copy bna raha ha



// const user ={
//     name: "ali",
// }
// const extra ={
//     age: 22,
// };
// const result = Object.assign({}, user,extra); // assign object ko merge krny ky liye use hot aha jab bad ma bnaya ho wo or purana dono object akathy output ma show hon ashuru ho jaty han is case ma jaisy name or age dono
// console.log(result)


// const user = {
//     name: "Ali"
// };
// Object.freeze(user);
// user.name = "ahmaed"; // ya chng he nahi ho ga kun ky freeze allow he nahi krta or error b koi nahi aye ga output purany wala anm he ali sjow ho ga 
// console.log(user.name)


// const person ={
//     country : "pakistan"
// };
// const user = Object.create(person)


// const user = {
//     name: "ali",
// };
// Object.freeze(user); // freeze chnage he nahi krny dy ga value ko 
// user.name = "ahmed";
// console.log(user.name);

// const user = {
//     name: "husnain",
// }
// Object.seal(user);
// user.name = "musa"; // is ma vaue to chnage kr sakty han but new property add nahi kr sskaty 
// console.log(user.name)


// const person = {
//     country : "pakistan"
// };
// const user = Object.create(person);
// user.name = "Ali";
// console.log(user.name);
// console.log(user.country);


// const group={};
// const fruits = [];

// let p = fruits.push({ name: "kela",  color: "yellow", qty: 8  })
// console.log(group)









