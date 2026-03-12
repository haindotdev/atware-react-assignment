import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      required = false,
      startAdornment,
      endAdornment,
      className = '',
      id,
      ...rest
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <div className={`relative ${fullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {startAdornment && (
            <div className="absolute left-3 flex items-center pointer-events-none">{startAdornment}</div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`
              ${fullWidth ? 'w-full' : ''}
              px-3 py-2 rounded-lg border transition-colors text-sm
              ${startAdornment ? 'pl-10' : ''}
              ${endAdornment ? 'pr-10' : ''}
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
            aria-describedby={hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...rest}
          />

          {endAdornment && <div className="absolute right-3 flex items-center pointer-events-none">{endAdornment}</div>}
        </div>

        {hasError && (
          <p id={`${inputId}-error`} className="text-sm text-red-500 mt-1">
            {error}
          </p>
        )}

        {helperText && !hasError && (
          <p id={`${inputId}-helper`} className="text-sm text-gray-500 mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
