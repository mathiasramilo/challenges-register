import { ComponentPropsWithoutRef } from 'react';

import { poppins } from '@/app/fonts';
import { cn } from '@/lib/utils';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        poppins.className,
        'rounded-full bg-red-600 p-3 text-white shadow-md disabled:bg-gray-400',
      )}
      {...props}
    >
      {children}
    </button>
  );
};
