import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePatients from '../hooks/usePatients';
import PatientListSection from '../components/PatientListSection';
import Button from '../components/Button';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

export default function Patients() {
  const { patients, deletePatient } = usePatients();
  const navigate = useNavigate();
  const [patientToDelete, setPatientToDelete] = useState(null);

  const handleDeleteConfirm = () => {
    deletePatient(patientToDelete.id);
    setPatientToDelete(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Patients</h2>
        <Button onClick={() => navigate('/patients/add')}>+ Add Patient</Button>
      </div>

      <PatientListSection
        patients={patients}
        onEdit={(id) => navigate(`/patients/edit/${id}`)}
        onDelete={setPatientToDelete}
      />

      <ConfirmDeleteModal
        patient={patientToDelete}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setPatientToDelete(null)}
      />
    </div>
  );
}
