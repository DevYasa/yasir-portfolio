import styled from 'styled-components';

export const SkillsContainer = styled.section`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
`;

export const SectionTitle = styled.h2`
  text-align: center;
  
  &:after {
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
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
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

export const SkillItem = styled.li`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
    transform: scale(1.05);
  }
`;