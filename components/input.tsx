import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: React.ReactNode;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  error?: string;
}

export const Input = ({
  label,
  leftAdornment,
  rightAdornment,
  error,
  id,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <div className="flex items-center gap-2 border-b-2 border-b-gray-500 pb-1 transition-all focus-within:border-b-red-600">
        <label htmlFor={id}>{leftAdornment}</label>
        <input id={id} className="flex-1 border-none outline-none" {...props} />
        {rightAdornment}
      </div>
      <span id="password-error" className="text-sm font-medium text-red-500">
        {error}
      </span>
    </div>
  );
};
