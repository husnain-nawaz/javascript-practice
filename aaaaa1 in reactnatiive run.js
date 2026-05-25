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
















