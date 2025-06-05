import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const elegantEasing = [0.25, 0.1, 0.25, 1];

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animationType?: 'gentle' | 'lift' | 'scale' | 'glow'
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, animationType = 'gentle', children, ...props }, ref) => {
    
    const getAnimationProps = () => {
      switch (animationType) {
        case 'lift':
          return {
            initial: {
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              y: -3,
              scale: 1.02,
              filter: "drop-shadow(0 6px 15px rgba(0, 0, 0, 0.08))"
            },
            whileTap: { 
              y: -1,
              scale: 0.98 
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'scale':
          return {
            initial: {
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              scale: 1.05,
              filter: "drop-shadow(0 3px 12px rgba(42, 111, 78, 0.12))"
            },
            whileTap: { 
              scale: 0.95 
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'glow':
          return {
            initial: {
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              scale: 1.02,
              filter: "drop-shadow(0 0 15px rgba(42, 111, 78, 0.2))"
            },
            whileTap: { 
              scale: 0.98 
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'gentle':
        default:
          return {
            initial: {
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              y: -1,
              scale: 1.01,
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.06))"
            },
            whileTap: { 
              scale: 0.99 
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
      }
    };

    const buttonClassName = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      return (
        <motion.div
          {...getAnimationProps()}
          style={{ display: 'inline-block' }}
        >
          <Slot
            className={buttonClassName}
            ref={ref}
            {...props}
          >
            {children}
          </Slot>
        </motion.div>
      )
    }

    return (
      <motion.button
        className={buttonClassName}
        ref={ref}
        {...getAnimationProps()}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, buttonVariants }