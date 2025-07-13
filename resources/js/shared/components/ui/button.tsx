import type * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[16px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
  {
    variants: {
      variant: {
        default:
          'bg-[linear-gradient(90deg,#1D5D77_0%,#2E94BE_100%)] text-primary-foreground shadow-[inset_0px_4px_12px_0px_rgba(255,255,255,0.5),0px_0px_12px_0px_#1D5D77] hover:bg-[linear-gradient(90deg,#1D5D77_0%,#2490b8_100%)] font-extrabold',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        tertiary:
          'border rounded-[12px] border-4 border-primary-300 text-primary-300 font-bold',
        secondary:
          'bg-white text-primary-300 font-extrabold shadow-xs shadow-[0px_0px_12px_0px_#1D5D77]',
        alt: 'bg-gradient-to-l from-[#7FCCCC] to-[#13B2BE] shadow-[inset_-4px_4px_7px_0px_rgba(255,255,255,0.5),0px_0px_18.5px_0px_#0C4C66] font-extrabold text-white',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        nav: 'text-primary',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-[16px] gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-[16px] px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
