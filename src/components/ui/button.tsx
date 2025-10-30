import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full md:w-auto [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-electric-sky text-white hover:bg-electric-sky z-30",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "btn-outline",
        secondary: "btn-secondary",
        ghost: "btn-ghost",
        link: "text-vc-primary underline-offset-4 hover:underline",
        gradient: "btn-gradient",
        glass: "btn-glass",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showChevron?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size,
      asChild = false,
      showChevron = true,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Show chevron for default variant when enabled and not using asChild
    const shouldShowChevron =
      showChevron &&
      variant === "default" &&
      !asChild &&
      !React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && child.type === ChevronRight
      );

    // When using asChild, don't add chevron automatically - let the child element handle it
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {shouldShowChevron && <ChevronRight className="ml-2 h-4 w-4" />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
