import React, { forwardRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon: Icon, fullWidth = true, className = '', ...props }, ref) => {
    const inputClasses = `
      block rounded-lg border px-3 py-2 text-sm placeholder-neutral-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1
      ${error 
        ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500' 
        : 'border-neutral-300 text-neutral-800 focus:border-primary-500 focus:ring-primary-500'
      }
      ${Icon ? 'pl-10' : ''}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim();

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="h-4 w-4 text-neutral-400" />
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-xs text-neutral-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';