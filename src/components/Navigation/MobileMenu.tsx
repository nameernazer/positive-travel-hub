
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: "0%",
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2
      }
    })
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'About', path: '#about' },
    { label: 'Services', path: '#services' },
    { label: 'Contact Us', path: '#contact' }
  ];

  const handleClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial="closed"
      animate={isMenuOpen ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-screen w-full bg-black/95 z-40 md:hidden flex justify-end"
    >
      <div className="w-full h-full flex flex-col items-end pr-8 pt-32">
        <motion.div className="flex flex-col items-end space-y-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={menuItemVariants}
            >
              {item.path.startsWith('#') ? (
                <button
                  onClick={() => handleClick(item.path)}
                  className="text-white text-2xl font-medium hover:text-white/80 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="text-white text-2xl font-medium hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
          <motion.div 
            variants={menuItemVariants}
            custom={5}
            className="flex items-center space-x-8 mt-8"
          >
            <a href="https://www.facebook.com/share/19rhFzkc4q/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/positivetravelandholidays" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://wa.me/917593946666" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
