import PatientTable from "../components/patienttable";

function Table({patients, handleDelete, handleEdit}) {
  return (
    <div className="max-w-xl mx-auto mt-5">
      <p className="text-center bg-amber-200 font-bold mt-3 underline">
        PATIENT TABLE
      </p>

      <PatientTable
        Colorchange='w-full table-fixed border border-collapse bg-orange-200'
        patients={patients}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Table;


