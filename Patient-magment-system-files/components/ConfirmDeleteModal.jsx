import Button from './Button';

export default function ConfirmDeleteModal({ patient, onConfirm, onCancel }) {
  if (!patient) return null; // hidden unless a patient is selected for deletion

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Delete Patient</h3>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete <span className="font-medium">{patient.firstName} {patient.lastName}</span>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="danger" onClick={onConfirm}>Delete</Button>
        </div>
      </div>
    </div>
  );
}
