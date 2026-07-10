import { useState, useEffect } from 'react';
import { getPatients, savePatients } from '../utils/localStorage';

// Custom hook that manages patient CRUD + syncs with localStorage
export default function usePatients() {
  // Lazy initializer -> reads localStorage only once, on first render
  const [patients, setPatients] = useState(() => getPatients());

  // Whenever patients changes, persist it
  useEffect(() => {
    savePatients(patients);
  }, [patients]);

  const addPatient = (patientData) => {
    const newPatient = { ...patientData, id: Date.now().toString() };
    setPatients((prev) => [...prev, newPatient]);
  };

  const updatePatient = (id, updatedData) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...updatedData, id } : p))
    );
  };

  const deletePatient = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };

  const getPatientById = (id) => patients.find((p) => p.id === id);

  return { patients, addPatient, updatePatient, deletePatient, getPatientById };
}
