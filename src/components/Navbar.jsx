import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../utils/data';
import { 
  Nav, 
  NavContainer, 
  Logo1, 
  NavLinks, 
  NavLink, 
  ThemeToggle, 
  MobileMenuButton,
  MobileMenu,
  MobileNavLink
} from '../styles/components/Navbar.styles';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo1 to="/">
          <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/logo6.png`} alt="Mohamed Yasir Logo" height="60" />
        </Logo1>
        
        <NavLinks>
          {navLinks.map((link) => (
            <NavLink 
              key={link.id}
              href={`#${link.id}`}
            >
              {link.title}
            </NavLink>
          ))}
        </NavLinks>
        
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </ThemeToggle>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={toggleMobileMenu}
                >
                  {link.title}
                </MobileNavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;