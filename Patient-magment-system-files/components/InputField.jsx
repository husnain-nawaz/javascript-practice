// Generic form field: renders input, select, or textarea based on `type`
export default function InputField({ label, name, type = 'text', value, onChange, error, options, placeholder }) {
  const baseClasses = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm';
  const errorClasses = error ? 'border-red-500' : 'border-gray-300';

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      {type === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} className={`${baseClasses} ${errorClasses}`}>
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="3"
          className={`${baseClasses} ${errorClasses}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} ${errorClasses}`}
        />
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
