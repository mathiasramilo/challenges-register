import type { ComponentPropsWithoutRef } from 'react';

import { LogoIcon } from './icons';

type LogoProps = ComponentPropsWithoutRef<'div'>;

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={className} {...props}>
      <LogoIcon />
    </div>
  );
};
