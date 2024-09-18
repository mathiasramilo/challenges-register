import { ComponentPropsWithoutRef } from "react";
import { poppins } from "@/app/fonts";
import { cn } from "@/lib/utils";

type LogoProps = ComponentPropsWithoutRef<"p">;

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <p className={cn(poppins.className, "font-semibold", className)} {...props}>
      A Logo
    </p>
  );
};
