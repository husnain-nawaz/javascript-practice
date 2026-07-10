import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/patients', label: 'Patients' },
  { to: '/patients/add', label: 'Add Patient' },
  { to: '/about', label: 'About' },
];

export default function Sidebar() {
  return (
    <aside className="w-full sm:w-48 bg-gray-800 text-gray-200 sm:min-h-[calc(100vh-56px)]">
      <nav className="flex sm:flex-col">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `px-4 py-3 text-sm hover:bg-gray-700 ${isActive ? 'bg-green-700 font-medium text-white' : ''}`
            }>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
