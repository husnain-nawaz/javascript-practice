const STORAGE_KEY = 'patients';

// Read patient list from localStorage (returns [] if nothing saved yet)
export function getPatients() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading patients from localStorage:', error);
    return [];
  }
}

// Save the full patient list back to localStorage
export function savePatients(patients) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
  } catch (error) {
    console.error('Error saving patients to localStorage:', error);
  }
}
