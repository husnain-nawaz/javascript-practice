import PatientRow from './PatientRow';

export default function PatientTable({ patients, onEdit, onDelete }) {
  if (patients.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 border rounded-md bg-white">
        No patients found. Try adding a new patient or adjusting your search/filter.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border rounded-md bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Age</th>
            <th className="px-4 py-3">Gender</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Disease</th>
            <th className="px-4 py-3">Appointment</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <PatientRow key={patient.id} patient={patient} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
