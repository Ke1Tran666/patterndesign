"use client";

import type React from "react";
import type { TextareaProps } from "../types";

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  rows = 3,
  className = "",
  name,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
