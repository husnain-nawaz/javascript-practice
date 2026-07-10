import Button from './Button';

export default function PatientRow({ patient, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{patient.firstName} {patient.lastName}</td>
      <td className="px-4 py-3">{patient.age}</td>
      <td className="px-4 py-3">{patient.gender}</td>
      <td className="px-4 py-3">{patient.phone}</td>
      <td className="px-4 py-3">{patient.disease}</td>
      <td className="px-4 py-3">{patient.appointmentDate}</td>
      <td className="px-4 py-3 space-x-2 whitespace-nowrap">
        <Button variant="secondary" onClick={() => onEdit(patient.id)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(patient)}>Delete</Button>
      </td>
    </tr>
  );
}
