import { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import PatientTable from './PatientTable';

// Reusable block: search + filter + table together
// Dono Dashboard aur Patients page isay use kar sakte hain
export default function PatientListSection({ patients, onEdit, onDelete, limit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [diseaseFilter, setDiseaseFilter] = useState('');

  const diseaseOptions = useMemo(
    () => [...new Set(patients.map((p) => p.disease).filter(Boolean))],
    [patients]
  );

  const filteredPatients = useMemo(() => {
    const filtered = patients.filter((p) => {
      const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
      const matchesSearch = fullName.includes(searchTerm.toLowerCase());
      const matchesDisease = diseaseFilter ? p.disease === diseaseFilter : true;
      return matchesSearch && matchesDisease;
    });
    const reversed = [...filtered].reverse(); // newest first
    return limit ? reversed.slice(0, limit) : reversed;
  }, [patients, searchTerm, diseaseFilter, limit]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search by name..." />
        <FilterDropdown value={diseaseFilter} onChange={setDiseaseFilter} options={diseaseOptions} label="Disease" />
      </div>
      <PatientTable patients={filteredPatients} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}
