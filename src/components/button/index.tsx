import React, { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-5 justify-center font-medium flex items-center gap-2",

  variants: {
    variant: {
      primary:
        "gap-2 px-5 py-2 bg-lime-300 rounded-lg text-lime-950 font-medium flex items-center hover:bg-lime-400",
      secundary:
        "bg-zinc-800 text-zinc-400  hover:bg-zinc-700 whitespace-nowrap",
    },
    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
