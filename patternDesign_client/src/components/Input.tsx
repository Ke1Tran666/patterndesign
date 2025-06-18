"use client";

import type React from "react";
import type { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  className = "",
  name,
  value,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
