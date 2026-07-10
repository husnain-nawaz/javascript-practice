import { useState, useEffect } from 'react';
import InputField from './InputField';
import Button from './Button';
import { validatePatientForm } from '../utils/validateForm';

const emptyForm = {
  firstName: '', lastName: '', age: '', gender: '',
  phone: '', disease: '', appointmentDate: '', address: '',
};

// Reusable form used by both Add and Edit pages
export default function PatientForm({ initialData, onSubmit, submitLabel = 'Save Patient' }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // Pre-fill fields when editing an existing patient
  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePatientForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border rounded-md p-6 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
        <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
        <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} error={errors.age} />
        <InputField label="Gender" name="gender" type="select" options={['Male', 'Female', 'Other']} value={formData.gender} onChange={handleChange} error={errors.gender} />
        <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
        <InputField label="Disease" name="disease" value={formData.disease} onChange={handleChange} error={errors.disease} />
        <InputField label="Appointment Date" name="appointmentDate" type="date" value={formData.appointmentDate} onChange={handleChange} error={errors.appointmentDate} />
      </div>
      <InputField label="Address" name="address" type="textarea" value={formData.address} onChange={handleChange} error={errors.address} />

      <div className="flex justify-end mt-2">
        <Button type="submit" variant="primary">{submitLabel}</Button>
      </div>
    </form>
  );
}
