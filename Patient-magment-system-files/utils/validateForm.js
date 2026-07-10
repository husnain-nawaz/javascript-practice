// Simple required-field + format validation for the patient form
export function validatePatientForm(formData) {
  const errors = {};

  if (!formData.firstName.trim()) errors.firstName = 'First name is required';
  if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
  if (!formData.age || Number(formData.age) <= 0) errors.age = 'Valid age is required';
  if (!formData.gender) errors.gender = 'Gender is required';

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\d{10,15}$/.test(formData.phone.trim())) {
    errors.phone = 'Enter a valid phone number (10-15 digits)';
  }

  if (!formData.disease.trim()) errors.disease = 'Disease is required';
  if (!formData.appointmentDate) errors.appointmentDate = 'Appointment date is required';
  if (!formData.address.trim()) errors.address = 'Address is required';

  return errors;
}
