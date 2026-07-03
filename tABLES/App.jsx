// import { useState, useEffect } from 'react'
// import './App.css'

// const diseases = [
//   "Flu", "Diabetes", "HyperTensions", "Asthama", "Malaria",
//   "Typhoid", "Migraine", "Athritis", "Covid-19", "Allergy"
// ];

// function App(){
//   const [form, setform] = useState({
//     firstname: "",
//     lastname: "",
//     phone: "",
//     diseases: diseases[0],
//   });
//   const [editingIndex, setEditingIndex] = useState(null);


//   // dispaly krna jo b values ham ko patient ki milain ge or jo b value tring ki surat ma milain un ko convert krna phir object ma or tables ma shift krna or table ma agr ko value already ho wo b display krna - or initial value satte krna patients ki usestate na  
//   const [patients, setpatients] = useState(()=>{
//     const savedpatients = localStorage.getItem("patients");
//     return savedpatients ? JSON.parse(savedpatients) : [];
//   })

//     // yahan save kro patients sting ma convert kr ky data jo b mily patients state sy - jab b patients satte ka variable change ho
//     useEffect(()=>{
//       localStorage.setItem("patients", JSON.stringify(patients))
//     },[patients])

//   const handlechange = (e)=>{
//     setform({...form, [e.target.name]: e.target.value});
//   }
//   const handlesubmit = (e)=>{
//     e.preventDefault();

//     if(!form.firstname || !form.lastname || !form.phone) return;

//     if(editingIndex === null){
//       setpatients([...patients, form]);
//     }else{
//       const updatedPatients = [...patients];
//       updatedPatients.splice(editingIndex,1,form);
//       setpatients(updatedPatients);
//       setEditingIndex(null);
//     }

//     setform({
//       firstname: "",
//       lastname: "",
//       phone: "",
//       diseases: diseases[0],
//     })
//   }

//   const handleDelete = (indexvalue)=>{
//     setpatients(
//       patients.filter(
//         (patientvalues, patientsindex)=> patientsindex !== indexvalue
//       )
//     );
//   }

//   const handleEdit = (indexvalue)=>{
//     setform(patients[indexvalue]);
//     setEditingIndex(indexvalue);
//   }

//   return(
// <>
// <div className='max-w-xl mx-auto bg-green-500 rounded mt-3 overflow-hidden'>
//   <p className='text-center font-bold mt-3 underline'>PATIENT DATA</p>

//   <form onSubmit={handlesubmit} className='flex flex-wrap gap-2 mt-10 justify-center p-3 rounded'>
//     <input
//       onChange={handlechange}
//       value={form.firstname}
//       name='firstname'
//       type="text"
//       className='border rounded px-2 py-2'
//       placeholder='First Name'
//     />

//     <input
//       onChange={handlechange}
//       value={form.lastname}
//       name='lastname'
//       type="text"
//       className='border rounded px-2 py-2'
//       placeholder='Last Name'
//     />

//     <input
//       onChange={handlechange}
//       value={form.phone}
//       name='phone'
//       type="number"
//       className='border rounded px-2 py-2'
//       placeholder='phone No'
//     />

//     <select
//       onChange={handlechange}
//       value={form.diseases}
//       name="diseases"
//       className='border rounded w-auto py-2'
//     >
//       {diseases.map((diseasevalue)=>(
//         <option key={diseasevalue} value={diseasevalue}>
//           {diseasevalue}
//         </option>
//       ))}
//     </select>

//     <button type='submit' className='bg-amber-400 px-2 py-2 rounded'>
//       Submit
//     </button>
//   </form>

//   <table className='w-full table-fixed border border-collapse'>
//     <thead>
//       <tr className='bg-amber-50'>
//         <th className='border px-2 py-2'>First Name</th>
//         <th className='border px-2 py-2'>Last Name</th>
//         <th className='border px-2 py-2'>Phone No</th>
//         <th className='border px-2 py-2'>Disease</th>
//         <th className='border px-2 pt-2'>Deletion</th>
//         <th className='border px-2 pt-2'>EDIT</th>
//       </tr>
//     </thead>

//     <tbody>
//       {patients.map((patient,indexvalue)=>(
//         <tr key={indexvalue}>
//           <td className='border px-2 py-2'>{patient.firstname}</td>
//           <td className='border px-2'>{patient.lastname}</td>
//           <td className='border px-2'>{patient.phone}</td>
//           <td className='border px-2 overflow-hidden'>{patient.diseases}</td>

//           <td className='border px-2 overflow-hidden'>
//             <button
//               onClick={()=> handleDelete(indexvalue)}
//               className='bg-red-400 px-2 mx-2 rounded shadow-2xl hover:bg-amber-300'
//             >
//               Delete
//             </button>
//           </td>

//           <td className='border px-2 overflow-hidden'>
//             <button
//               onClick={()=>handleEdit(indexvalue)}
//               className='bg-blue-400 px-2 mx-2 rounded shadow-2xl hover:bg-amber-300'
//             >
//               EDIT
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
// </>
//   )
// }

// export default App;




// -------------------------------------------------------------------








// import Button from "./Button.jsx"

// function App(){
//   return (
//     <>
//       <Button text="Save" />
//       <Button text="Delete" />
//       <Button text="Edit" />
//     </>
//   )
// }
// export default App;




// -------------------------------------------------------------------




// import PatientTable from './patienttable.jsx'

// function App(){
//     const Patientsarr = [
//       {id: 1, name: "Ali", phone: "12345"},
//       {id: 2, name: "Ahmed", phone: "45678"},
//     ];
//     return(
//       <>
//         <PatientTable patients={Patientsarr} />
//       </>
//     )

// }
// export default App;




// ------------------------------------------------------------




import { Routes, Route } from "react-router-dom";
import Table from "./pages/table";
import { useState, useEffect } from "react";
import "./app.css";

import PatientForm from "./components/patientform";
import PatientTable from "./components/patienttable";

const diseases = [
  "Flu",
  "Diabetes",
  "HyperTensions",
  "Asthama",
  "Malaria",
  "Typhoid",
  "Migraine",
  "Athritis",
  "Covid-19",
  "Allergy",
];

function App() {
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    diseases: diseases[0],
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const [patients, setpatients] = useState(() => {
    const savedpatients = localStorage.getItem("patients");
    return savedpatients ? JSON.parse(savedpatients) : [];
  });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!form.firstname || !form.lastname || !form.phone)
      return;

    if (editingIndex === null) {
      setpatients([...patients, form]);
    } else {
      const updatedPatients = [...patients];
      updatedPatients.splice(editingIndex, 1, form);
      setpatients(updatedPatients);
      setEditingIndex(null);
    }

    setform({
      firstname: "",
      lastname: "",
      phone: "",
      diseases: diseases[0],
    });
  };

  const handleDelete = (index) => {
    setpatients(
      patients.filter((values, i) => i !== index)
    );
  };

  const handleEdit = (index) => {
    setform(patients[index]);
    setEditingIndex(index);
  };

  return (
  <Routes>

    <Route
      path="/"
      element={
        <div className="max-w-xl mx-auto bg-green-500 rounded mt-3 overflow-hidden">

          <p className="text-center font-bold mt-3 underline">
            PATIENT DATA
          </p>

          <PatientForm
            form={form}
            handlechange={handlechange}
            handlesubmit={handlesubmit}
            diseases={diseases}
            editingIndex={editingIndex}
          />

          <PatientTable
           Colorchange='w-full table-fixed border border-collapse bg-pink-400'
            patients={patients}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />

        </div>
      }
    />

    <Route
      path="/table"
      element={
        <>

        <Table
          patients={patients}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        </>
      }
    />

  </Routes>
);
}

export default App;





























