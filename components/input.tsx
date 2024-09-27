import type { ComponentPropsWithoutRef } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues>
  extends ComponentPropsWithoutRef<'input'> {
  label?: React.ReactNode;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  error?: string;
  fieldName: Path<T>;
  register: UseFormRegister<T>;
}

export const Input = <T extends FieldValues>({
  label,
  leftAdornment,
  rightAdornment,
  error,
  fieldName,
  register,
  id,
  ...props
}: InputProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <div className="flex items-center gap-2 border-b-2 border-b-gray-500 pb-1 transition-all focus-within:border-b-red-600">
        <label htmlFor={id}>{leftAdornment}</label>
        <input
          id={id}
          className="flex-1 border-none outline-none"
          {...register(fieldName)}
          {...props}
        />
        {rightAdornment}
      </div>
      <span id="password-error" className="text-sm font-medium text-red-500">
        {error}
      </span>
    </div>
  );
};
