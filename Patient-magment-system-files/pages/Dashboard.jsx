import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import usePatients from '../hooks/usePatients';
import DashboardCard from '../components/DashboardCard';
import PatientListSection from '../components/PatientListSection';

export default function Dashboard() {
  const { patients, deletePatient } = usePatients();
  const navigate = useNavigate();

  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return {
      total: patients.length,
      male: patients.filter((p) => p.gender === 'Male').length,
      female: patients.filter((p) => p.gender === 'Female').length,
      todayAppointments: patients.filter((p) => p.appointmentDate === today).length,
    };
  }, [patients]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Total Patients" value={stats.total} icon="🧑‍⚕️" color="blue" />
        <DashboardCard title="Male Patients" value={stats.male} icon="👨" color="purple" />
        <DashboardCard title="Female Patients" value={stats.female} icon="👩" color="pink" />
        <DashboardCard title="Today's Appointments" value={stats.todayAppointments} icon="📅" color="green" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Recent Patients</h3>
        <button onClick={() => navigate('/patients')} className="text-sm text-blue-600 hover:underline">
          View all →
        </button>
      </div>

      <PatientListSection
        patients={patients}
        onEdit={(id) => navigate(`/patients/edit/${id}`)}
        onDelete={(patient) => deletePatient(patient.id)}
        limit={5}
      />
    </div>
  );
}