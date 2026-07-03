function Patientform({form, handlechange, handlesubmit, diseases}) 
{
  return (
    <form
      onSubmit={handlesubmit}
      className='flex flex-wrap gap-2 mt-10 justify-center p-3 rounded'
    >
      <input
        onChange={handlechange}
        value={form.firstname}
        name='firstname'
        type="text"
        className='border rounded px-2 py-2'
        placeholder='First Name'
      />

      <input
        onChange={handlechange}
        value={form.lastname}
        name='lastname'
        type="text"
        className='border rounded px-2 py-2'
        placeholder='Last Name'
      />

      <input
        onChange={handlechange}
        value={form.phone}
        name='phone'
        type="number"
        className='border rounded px-2 py-2'
        placeholder='phone No'
      />

      <select
        onChange={handlechange}
        value={form.diseases}
        name="diseases"
        className='border rounded w-auto py-2'
      >
        {diseases.map((diseasevalue) => (
          <option
            key={diseasevalue}
            value={diseasevalue}
          >
            {diseasevalue}
          </option>
        ))}
      </select>

      <button
        type='submit'
        className='bg-amber-400 px-2 py-2 rounded'
      >
        Submit
      </button>
    </form>
  )
}

export default Patientform;
