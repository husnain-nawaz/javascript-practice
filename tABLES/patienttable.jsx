
import "./app.css";



function PatientTable({patients}){
    return(
        <>
        <table className="border"></table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((values)=>(                    <tr key={values.id}>
                        <td>{values.name}</td>
                        <td>{values.phone}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}



export default PatientTable;










