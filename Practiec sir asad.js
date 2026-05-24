
// let person="ali", 
// carname="toyota", 
// number=200;
// console.log(person)
// console.log(carname)
// console.log(number)


// let x= "3"+3+3; // treat all as tring 
// let y= 2+2+"2"; // treet first 2 add and than made it a string
// console.log(x)
// console.log(y)

// let x = "babg"
// let y = "han han g"
// let n = x+"   "+y

// let x="what a nice "
// x+="day";
// console.log(x); 



// let x = {};
// let y = x &&= 9;
// console.log(y); 


// let age=16;
// let country='USA';
// let text = 'You cannot Drive';

// // if (country=='USA'){
// //     if (age>=16){
// //         console.log('you can drive in USA');
// //     }
// // }

// if(country=='USA' && age>=16){
//     console.log('you can drive in USA');
// }


// let text;
// if (Math.random()>0.5) {
//     console.log('greater than .5')
// }else
// {
//     console.log('less than .5');
// }


// age=11;
// let text=(age<14)?'minor' : 'older';
// console.log(text)

// let price=10;
// let ismember=true;
// let discount= ismember?.2 : 0;
// let totaldis = 10 -(price*discount)
// console.log(totaldis)

// // let day;
// let date = "tuesday";
 
// switch (date) {
//   case "sunday":
//     day = "Sunday";
//     console.log(day)
//     break;
//   case "tuesday":
//     day = "tues";
//         console.log(day)
//     break;
//   case 2:
//     day = "Tuesday";
//         console.log(day)
//     break;
//   case 3:
//     day = "Wednesday";
//         console.log(day)
//     break;
//   case 4:
//     day = "Thursday";
//         console.log(day)
//     break;
//   case 5:
//     day = "Friday";
//         console.log(day)
//     break;
//   case  6:
//     day = "Saturday";
//         console.log(day)
//         break;
//     default:
//         console.log('wrong')
// }


// let x = false;
// console.log(typeof x);
// let y = new Boolean(false);
// console.log(typeof y)

// console.log(x===y);


// let text = "";
// const cars = ["BMW", "volvo", "saab", "ford", "fiat", "Audi"];
// for (let i=0; i<cars.length; i++){
//     text = text + cars[i];
//     console.log(text)
// }


// let i =5;
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// text = "";
// i=1;
// do {
//     text = text +i;
//     i++;
//     console.log(text);
// }while(i<10);


// const cars = ["BMW", "Volvo", "saab", "ford"];
// let len = cars.length;
// let text="";
// for (let i=1; i<len; i++){
//     text= text + cars[i];
//     console.log(text)
// }


// const cars = ["BMW", "Volvo", "saab", "ford"];
// let len = cars.length;
// let text="";
// let i =2;
// for (; i<len; ){
//     text= text + cars[i];
//     i++
//     console.log(text)
// }


// let i=5;
// for(let i=0; i<10; i++){

// }
// console.log(i);

// let i, x = '';
// for (i = 0; i <= 5; i++) {
//   x += i;
//   console.log(i);
// }



// text = "";
// let i=1;
// do{
//     i++;
//     text = text + i;
//     console.log(text);
// }while(i<10);


// const cars = ["BMW", "Volvo", "saab", "ford"];
// let i=0;
// let text = "";
// while(cars[i]){
//     text+=cars[i];
//     i++;
//     console.log(text);
// }

// let i = 0;
// for (;i<10;){
//     i++;
//     if(i==4){
//         break;
//     }

// }    console.log(i);



// let text="";

// loop1: for(let j=0; j<5; j++){
//     loop2: for(let i=1; i<5; i++){
//         if(j===2){
//             break loop1;
//         }
//         text=text+i;
//         console.log(j,i);
//         console.log(text)

//     }
// }


// const fruits=['apple','banana','mango'];
// let x='';
// myfavourite:{
//     x = fruits[0];
//     x = fruits[1];
//     break myfavourite;
//     x= fruits[2];
// }

// let text = "";
// for(let i=0; i<10; i++){
//     if(i===5){
//         continue; //for skip
//     }

//     text+=i;
    // console.log(i)
// }


// let text = "";
// loop1: for(let j=1; j<5; j++){
//     loop2: for(let i=1;i<5;i++){
//         if(j===2){continue loop1;} // skip 2
//         text+=i;
//         console.log(text);
//         console.log(j,i);
//     }
// }


// let n;
// function myfunc(p1,p2){
//     n = p1*p2;
//     return n;
// }
// myfunc(2,5);
// console.log(n);


// let text = `he 
// jdn
// nkdcjk`;
// console.log(text)



// let text = "nnddnjdsncnnnnnnjdsncjdn"
// let len=text.length;
// console.log(len)



// let text = "we \'are\' very\\ goo \n people, \"really\" yes true";
// console.log(text);

// let text1 = "me hon"
// let text2 = "husnain"
// let n = text1 +" "+ text2;
// console.log(n)


// let x = new String("ali");
// let y = "ali";
// console.log(y);
// console.log(x);
// let g = (x==y);
// console.log(g); //on compare here
// let t = (x===y); // comapre even datatypes so here string and object so value false
// console.log(t); // if cmpare two object in case still retun is false in js


// let f1 = "john";
// let f2 = "shaw";
// let i=2,n=2,c;
// let text = `weclome sir ${f1} ${f2} and 
// value of ${i} & ${n} = ${c=i*n} and exponent is 
// ${Math.exp(c)}`
// console.log(text);


// let tex1="jhgfxcfgh";
// let text2 = "alia"
// let c = tex1.concat(" ", text2);
// // let b = text.charAt(1);
// console.log(c);

// let text = "123456789";
// let part1 = text.slice(8,13);
// let part2 = text.slice(9); // ---->
// let part3 = text.slice(-16); // <----
// let part4 = text.substr(-8, -3);
// let part5sub = text.substr(2,7); // -ve values become 0 here automatically
// let len = text.length;
// console.log(len);
// console.log(part1);
// console.log(part2);
// console.log(part3);
// console.log(part4);
// console.log(part5sub)

let text1 = "helloe bhai";
console.log(text1);
let text2 = text1.toUpperCase();
let text3 = text2.toLowerCase();
console.log(text2);
console.log(text3);



















