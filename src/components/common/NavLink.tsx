import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  isActive?: boolean;
}

export default function NavLink({ href, children, mobile = false, isActive = false }: NavLinkProps) {
  if (mobile) {
    return (
      <motion.a
        href={href}
        className={`block px-4 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 rounded-lg ${
          isActive 
            ? 'text-primary bg-primary/5 border-l-4 border-primary' 
            : 'text-gray-700 hover:text-primary'
        }`}
        whileHover={{ 
          backgroundColor: isActive ? "rgba(42, 111, 78, 0.1)" : "rgba(42, 111, 78, 0.02)",
          x: 3
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        role="menuitem"
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      className={`inline-block transition-colors font-medium font-sans relative px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-primary/5 ${
        isActive 
          ? 'text-primary' 
          : 'text-gray-700 hover:text-primary'
      }`}
      whileHover={{ 
        y: -1,
        scale: 1.02
      }}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
    >
      <motion.span
        className="relative z-10"
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
        initial={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{ transformOrigin: "left" }}
      />
    </motion.a>
  );
}