export default function About() {
  return (
    <div className="bg-white border rounded-md p-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">About This System</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        The Patient Management System is a lightweight app for clinics and small
        healthcare practices to keep track of patient records. It lets staff
        add, edit, search, and remove patient entries, and gives a quick
        dashboard overview of patient counts and today's appointments.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">
        Built with React, React Router, and Tailwind CSS. All patient data is
        stored locally in the browser using localStorage, so no backend
        server or database is required to run it.
      </p>
    </div>
  );
}
