import React, { forwardRef, SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
  startAdornment?: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      required = false,
      options,
      placeholder,
      startAdornment,
      className = '',
      id,
      ...rest
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <div className={`relative ${fullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {startAdornment && (
            <div className="absolute left-3 flex items-center pointer-events-none">{startAdornment}</div>
          )}

          <select
            ref={ref}
            id={selectId}
            className={`
              ${fullWidth ? 'w-full' : ''}
              px-3 py-2 rounded-lg border transition-colors text-sm appearance-none
              ${startAdornment ? 'pl-10' : ''}
              pr-10
              ${
                hasError
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
              focus:outline-none focus:ring-1
              disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
              ${className}
            `}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          <svg
            className="absolute right-3 w-4 h-4 pointer-events-none text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {hasError && (
          <p id={`${selectId}-error`} className="text-sm text-red-500 mt-1">
            {error}
          </p>
        )}

        {helperText && !hasError && (
          <p id={`${selectId}-helper`} className="text-sm text-gray-500 mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
