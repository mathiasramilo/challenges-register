import { cn } from '@/lib/utils';
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
      <label
        htmlFor={id}
        className={cn('text-sm font-semibold', error && 'text-red-600')}
      >
        {label}
      </label>
      <div
        className={cn(
          'flex items-center gap-2 overflow-hidden rounded-t-lg border-b-2 border-b-gray-500 bg-white p-3 transition-all focus-within:border-b-red-600',
          error && 'border-b-red-600',
        )}
      >
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
