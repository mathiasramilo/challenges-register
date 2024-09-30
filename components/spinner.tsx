import { cn } from '@/lib/utils';

const sizeVariants = {
  sm: 'size-6 border-2',
  md: 'size-12 border-4',
  lg: 'size-20 border-8',
} as const;

const colorVariants = {
  red: 'border-red-200 border-t-red-600',
  white: 'border-white/50 border-t-white',
} as const;

interface SpinnerProps {
  size?: keyof typeof sizeVariants;
  color?: keyof typeof colorVariants;
}

export const Spinner = ({ size = 'sm', color = 'white' }: SpinnerProps) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full',
        sizeVariants[size],
        colorVariants[color],
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
