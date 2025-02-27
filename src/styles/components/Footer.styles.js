import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
  padding: 60px 0 30px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterLogo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }
  
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.mode === 'light' ? theme.colors.gray : theme.colors.lightText};
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FooterLinksColumn = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    li {
      transition: ${({ theme }) => theme.transitions.default};
      
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
        transform: translateX(5px);
      }
    }
  }
`;

export const FooterDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
  margin: 30px 0;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.accentDark};
      transform: translateY(-3px);
    }
    
    i {
      font-size: 1.2rem;
    }
  }
`;