import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-normal sm:whitespace-nowrap rounded-2xl px-6 py-3 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A103F]/20 disabled:pointer-events-none disabled:opacity-50 text-center [&>svg]:pointer-events-none [&>svg]:size-5 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#1A103F] text-white border border-[#1A103F]/20 shadow-lg hover:scale-[1.02] hover:shadow-xl hover:bg-[#2d1a6a] dark:bg-white/10 dark:text-[#EAE8F3] dark:border-white/25 dark:hover:bg-white/15",
        destructive:
          "bg-red-600 text-white border border-red-500/40 shadow-lg hover:scale-[1.02] hover:shadow-xl hover:bg-red-700",
        outline:
          "bg-transparent text-[#1A103F] border border-[#1A103F]/30 hover:bg-[#1A103F]/10 hover:scale-[1.02] hover:shadow-lg dark:text-[#EAE8F3] dark:border-white/25 dark:hover:bg-white/10",
        secondary:
          "bg-white/80 text-[#1A103F] border border-white/60 shadow-md hover:scale-[1.02] hover:shadow-xl hover:bg-white dark:bg-white/10 dark:text-[#EAE8F3] dark:border-white/20",
        ghost:
          "bg-transparent text-[#1A103F] hover:bg-[#1A103F]/10 dark:text-[#EAE8F3] dark:hover:bg-white/10",
        link: "text-[#1A103F] underline-offset-4 hover:underline dark:text-[#EAE8F3]",
      },
      size: {
        default: "h-auto",
        sm: "px-4 py-2 text-sm gap-2",
        lg: "px-8 py-4 text-lg gap-4",
        icon: "p-3 rounded-xl [&>svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
