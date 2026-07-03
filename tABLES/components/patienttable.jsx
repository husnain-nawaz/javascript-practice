function Patienttable({Colorchange,patients, handleDelete, handleEdit}) 
{
  return (
    <table className={Colorchange}>
      <thead>
        <tr>
          <th className='border px-2 py-2'>First Name</th>
          <th className='border px-2 py-2'>Last Name</th>
          <th className='border px-2 py-2'>Phone No</th>
          <th className='border px-2 py-2'>Disease</th>
          <th className='border px-2 pt-2'>Deletion</th>
          <th className='border px-2 pt-2'>EDIT</th>
        </tr>
      </thead>

      <tbody>
        {patients.map((patient, indexvalue) => (
          <tr key={indexvalue}>
            <td className='border bg-amber-300 px-2 py-2'>
              {patient.firstname}
            </td>

            <td className='border bg-blue-400 px-2'>
              {patient.lastname}
            </td>

            <td className='border bg-cyan-400 px-2'>
              {patient.phone}
            </td>

            <td className='border px-2 bg-emerald-400 overflow-hidden'>
              {patient.diseases}
            </td>

            <td className='border px-2 overflow-hidden'>
              <button
                onClick={() => handleDelete(indexvalue)}
                className='bg-red-400 px-2 mx-2 rounded shadow-2xl hover:bg-amber-300'
              >
                Delete
              </button>
            </td>

            <td className='border px-2 overflow-hidden'>
              <button
                onClick={() => handleEdit(indexvalue)}
                className='bg-blue-400 px-2 mx-2 rounded shadow-2xl hover:bg-amber-300'
              >
                EDIT
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Patienttable;


