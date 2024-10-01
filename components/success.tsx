import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import { ubuntu } from '@/app/fonts';
import { ConfettiIcon } from './icons';

type SuccessProps = ComponentPropsWithoutRef<'div'>;

export const Success = ({ className, ...props }: SuccessProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-4',
        className,
      )}
      {...props}
    >
      <ConfettiIcon width={42} height={42} />
      <p
        className={cn(
          ubuntu.className,
          'text-center text-2xl font-bold text-red-700',
        )}
      >
        Great!
        <br />
        You signed in
      </p>
    </div>
  );
};
