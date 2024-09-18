import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  img: string;
  error?: string;
}

export const Input = ({
  label,
  img,
  error,
  type,
  id,
  name,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <div className="flex items-center gap-2 border-b-2 border-b-gray-500 pb-1 transition-all focus-within:border-b-red-600">
        <label htmlFor={id}>
          <Image src={img} alt="" width={16} height={16} />
        </label>
        <input
          type={type}
          id={id}
          name={name}
          className="flex-1 border-none outline-none"
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="appearance-none border-none bg-transparent active:opacity-50"
          >
            <Image src="/invisible.png" alt="" width={16} height={16} />
            <span className="sr-only">Show password</span>
          </button>
        )}
      </div>
      <span id="password-error" className="text-sm font-medium text-red-500">
        {error}
      </span>
    </div>
  );
};
