
const SelectBox = ({options, value, placeholder,onChange, className}) => {
  return (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none p-2 border border-gray-300 rounded bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white ${className}`}
    >
    <option value="" disabled>
        {placeholder}
    </option>
      {options.map((opt) => (
        <option key={opt.label} value={opt.value} className="text-center">
          {opt.label}
        </option>
      ))}
    </select>
  )
}

export default SelectBox