import { motion } from 'framer-motion';

interface ContactNavButtonProps {
  mobile?: boolean;
}

export default function ContactNavButton({ mobile = false }: ContactNavButtonProps) {
  if (mobile) {
    return (
      <motion.a
        href="/contact"
        className="block px-4 py-3 text-gray-700 hover:text-primary font-medium"
        whileHover={{ 
          backgroundColor: "rgba(42, 111, 78, 0.05)",
          x: 5
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        お問い合わせ
      </motion.a>
    );
  }

  return (
    <motion.a
      href="/contact"
      className="inline-block px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 rounded-full font-medium font-sans transition-colors"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 4px 20px rgba(42, 111, 78, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      お問い合わせ
    </motion.a>
  );
}