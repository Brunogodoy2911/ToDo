import type React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariants = cva(
  `
  inline-flex items-center justify-center cursor-pointer transition group
  `,
  {
    variants: {
      variant: {
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-base",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const buttonIcoIconnVariants = cva(
  `
  transition
  `,
  {
    variants: {
      variant: {
        primary: "fill-white",
        secondary: "fill-pink-base group-hover:fill-white",
        tertiary: "fill-gray-300 group-hover:fill-gray-400",
      },
      size: {
        sm: "w-4 h-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} className={buttonIcoIconnVariants({ variant, size })} />
    </button>
  );
}
