import React from "react";

function FormDDLInput({
  label,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
}) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <select
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      >
        <option value="">בחר</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormDDLInput;
// This component renders a select input with a label.