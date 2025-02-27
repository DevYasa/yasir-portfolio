import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ $scrolled, theme }) => 
    $scrolled 
      ? theme.mode === 'light' 
        ? 'rgba(255, 255, 255, 0.9)' 
        : 'rgba(18, 18, 18, 0.9)'
      : 'transparent'
  };
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ $scrolled, theme }) => $scrolled ? theme.shadows.small : 'none'};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    
    &:after {
      width: 100%;
    }
  }
`;

export const ThemeToggle = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
  }
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
  padding: 1rem 0;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Logo1 = styled.a`
  display: flex;
  align-items: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  img {
    height: 40px;
    width: auto;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;