
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

// let text1 = "helloe bhai";
// console.log(text1);
// let text2 = text1.toUpperCase();
// let text3 = text2.toLowerCase();
// console.log(text2);
// console.log(text3);


// let text1 = "Hello world \uD800";
// let text2 = "husnain nawaz";
// let result1 = text1.isWellFormed();
// let result2 = text2.isWellFormed();
// console.log(result1);
// console.log(result2);



// let text = "       f dddsd remoevspace before and after       ";
// let result = text.trim();
// console.log(result);


// let text = "       f dddsd remoevspace before and after       ";
// let result2 = text.trimEnd();
// console.log(result2);

// let text = "6";
// let n = text.padStart(6,"-") // add - 5 times start of text value
// console.log(n)

// let number= 6;
// let text = number.toString();
// let padded = text.padEnd(5,"v");
// console.log(padded);

// let text = "james husnain";
// let result = text.repeat(2); // repeat the text value for 2 time
// console.log(result);


// let text = "my name husnain";
// // let newtext = text.replace("husnain", "nawaz"); // repace husnian woth nawaz
// let text2 = text.replace("my name is lakhan"); // not woeking for whole just repace with some words 
// // console.log(text);
// // console.log(newtext);
// console.log(text2);


// let text = "please reapkce husnain and husnain";
// let change = text.replace("husnain","musa"); // it reaplce only first husnain not the secondf one but we can use it in html like button click 2 time to replac both etc
// console.log(change); // also case sesitive HUSNAIN never change


// let text = " baba ry baba";
// let change = text.replace("BABA", "hsuanian"); // case sensitive BABA dont work here
// console.log(change);

// let text = " baba ry baba";
// let change = text.replace(/BABA/i, "hsuanian"); // even though case senstive still by using /i chnage BABA
// console.log(change);

// let text = " I love cats. Cats are really clever animal cats.";
// text = text.replaceAll("cats","dogs");
// text = text.replaceAll("Cats","DOGS")
// console.log(text);


// let text = " I love cats. Cats are really clever animal cats.";
// text = text.replaceAll("cats","dogs");  // case sensitive 
// text = text.replaceAll(/Cats/g,"DOGS")
// console.log(text);


// let text = "a,l,i,n,a";
// let change = text.split(",");
// console.log(change);
// console.log(change[3]); // converted string into array 

// let text = "Hello";
// let change = text.split("");

// text = "";
// for (let i = 0; i < change.length; i++) {
//     text+=change[i];
//     console.log(text);
// }


// let text= "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate"); // first locate he ka he lia ha na ky 2nd waly ka 
// let lastindex = text.lastIndexOf("locate"); // ya last wal locate ka btata ha
// let checkindex = text.lastIndexOf("husnian"); // return -1 because husnain hahe nahi string ma or indexof b -1 he kary ga agr na mila jo ham search kr rhy string ma 
// console.log(index);
// console.log(lastindex);
// console.log();



// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate",15); // 15 ky bad find krna ha locate jo jo dusra wala ho ga lakin is case ma wo poehla ha kun ky ham 15 ky bad search lkrna ka keh rehy han or 15 sy pehly sary ignore ho jain gy
// console.log(index); // indexof----->   <------ lastindexof




let text = "Please locate where 'locate' occurs!";
let search1 = text.search("locate");
let search2 = text.search(/where/);
console.log(search1);
console.log(search2);















