debugger;
const students = [
  { name: "Ali",    marks: 85, subject: "Math",    passed: true  },
  { name: "Sara",   marks: 45, subject: "Science",  passed: false },
  { name: "Ahmed",  marks: 92, subject: "Math",    passed: true  },
  { name: "Fatima", marks: 38, subject: "English",  passed: false },
  { name: "Usman",  marks: 76, subject: "Science",  passed: true  }
];
let grouped = {};
for(let i=0; i<students.length; i++){
  if(grouped[students[i].subject]){
    grouped[students[i].subject].push(students[i]);
  }
  else{
    grouped[students[i].subject] = [students[i]];
  }
}
console.log(grouped)

