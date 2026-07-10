import { useParams, useNavigate } from 'react-router-dom';
import usePatients from '../hooks/usePatients';
import PatientForm from '../components/PatientForm';

export default function AddEditPatient() {
  const { id } = useParams(); // present only on the edit route
  const navigate = useNavigate();
  const { addPatient, updatePatient, getPatientById } = usePatients();

  const isEditMode = Boolean(id);
  const existingPatient = isEditMode ? getPatientById(id) : null;

  const handleSubmit = (formData) => {
    if (isEditMode) {
      updatePatient(id, formData);
    } else {
      addPatient(formData);
    }
    navigate('/patients');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {isEditMode ? 'Edit Patient' : 'Add Patient'}
      </h2>
      <PatientForm
        initialData={existingPatient}
        onSubmit={handleSubmit}
        submitLabel={isEditMode ? 'Update Patient' : 'Add Patient'}
      />
    </div>
  );
}
