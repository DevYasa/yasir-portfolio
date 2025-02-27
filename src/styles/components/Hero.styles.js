import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: 80px;
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0.5rem 0;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentLight});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 3.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.8rem;
  }
`;

export const HeroSubtitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.gray : theme.colors.lightGray};
`;

export const HeroDescription = styled.p`
  margin: 1.5rem 0;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.7;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HeroButton = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ className, theme }) => 
    className === 'btn-outline' 
      ? 'transparent' 
      : theme.colors.accent
  };
  color: ${({ className, theme }) => 
    className === 'btn-outline' 
      ? theme.colors.accent 
      : 'white'
  };
  border: 2px solid ${({ theme }) => theme.colors.accent};
  display: inline-block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: ${({ className, theme }) => 
      className === 'btn-outline' 
        ? theme.colors.accent 
        : theme.colors.accentDark
    };
    color: white;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const HeroImage = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.03);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-3px);
  }
`;

export const HeroScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;