import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = props => {
  const { label, name, value, placeholder, type, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        className="is-invalid form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
