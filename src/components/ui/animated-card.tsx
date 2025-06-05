import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const elegantEasing = [0.25, 0.1, 0.25, 1];

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  animationType?: 'lift' | 'scale' | 'tilt' | 'glow' | 'subtle'
  delay?: number
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, animationType = 'lift', delay = 0, children, ...props }, ref) => {
    
    const getAnimationProps = () => {
      const baseAnimation = {
        initial: { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        animate: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 1.0,
            ease: elegantEasing,
            delay: delay
          }
        }
      };

      switch (animationType) {
        case 'lift':
          return {
            ...baseAnimation,
            initial: {
              ...baseAnimation.initial,
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              y: -4,
              scale: 1.01,
              filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.06))"
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'scale':
          return {
            ...baseAnimation,
            initial: {
              ...baseAnimation.initial,
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              scale: 1.05,
              filter: "drop-shadow(0 15px 35px rgba(42, 111, 78, 0.15))"
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'tilt':
          return {
            ...baseAnimation,
            initial: {
              ...baseAnimation.initial,
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              y: -3,
              rotateX: 3,
              rotateY: 3,
              scale: 1.01,
              filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.08))"
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'glow':
          return {
            ...baseAnimation,
            initial: {
              ...baseAnimation.initial,
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              y: -2,
              scale: 1.005,
              filter: "drop-shadow(0 6px 20px rgba(42, 111, 78, 0.12))"
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
        case 'subtle':
        default:
          return {
            ...baseAnimation,
            initial: {
              ...baseAnimation.initial,
              filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))"
            },
            whileHover: { 
              y: -2,
              scale: 1.01,
              filter: "drop-shadow(0 8px 25px rgba(0, 0, 0, 0.08))"
            },
            transition: { 
              duration: 0.8,
              ease: elegantEasing
            }
          };
      }
    };

    return (
      <motion.div
        ref={ref}
        className={cn("group", className)}
        {...getAnimationProps()}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard }