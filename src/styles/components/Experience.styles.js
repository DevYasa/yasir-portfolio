import styled from 'styled-components';

export const ExperienceSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.mode === 'light' 
      ? 'linear-gradient(rgba(123, 97, 255, 0.03), transparent)'
      : 'linear-gradient(rgba(123, 97, 255, 0.05), transparent)'};
    z-index: 0;
  }
`;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ExperienceColumn = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 50%;
      height: 3px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
  }
`;

export const ExperienceCard = styled.div`
  background-color: ${({ theme }) => theme.mode === 'light' 
    ? 'white' 
    : theme.colors.darkGray};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: 1.5rem;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const ExperienceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ExperienceTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ExperienceCompany = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0 0;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.gray : theme.colors.lightText};
`;

export const ExperienceDuration = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.mode === 'light' 
    ? 'rgba(123, 97, 255, 0.1)' 
    : 'rgba(123, 97, 255, 0.2)'};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
`;

export const ExperienceResponsibilities = styled.ul`
  padding-left: 1.2rem;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

export const ExperienceGPA = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CtaContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mode === 'light' 
    ? 'rgba(123, 97, 255, 0.05)' 
    : 'rgba(123, 97, 255, 0.1)'};
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;