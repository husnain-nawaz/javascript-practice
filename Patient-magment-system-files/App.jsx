import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import AddEditPatient from './pages/AddEditPatient';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col sm:flex-row flex-1">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/add" element={<AddEditPatient />} />
            <Route path="/patients/edit/:id" element={<AddEditPatient />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
