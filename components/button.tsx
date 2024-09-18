import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { poppins } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    PropsWithChildren {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        poppins.className,
        "rounded-full bg-red-600 p-3 text-white shadow-md",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
