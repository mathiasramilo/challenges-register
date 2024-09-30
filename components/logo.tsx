import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

type LogoProps = ComponentPropsWithoutRef<'div'>;

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={className} {...props}>
      <Image src="/logo.png" alt="Logo" width={128} height={64} />
    </div>
  );
};
