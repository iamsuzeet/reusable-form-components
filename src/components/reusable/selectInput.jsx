import React from "react";

const selectInput = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} className="form-control" id={name} name={name}>
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default selectInput;
