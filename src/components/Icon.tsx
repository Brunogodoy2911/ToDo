import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconsVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconsVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconsVariants({ animate, className })}
      {...props}
    />
  );
}
