import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
`;

export const SectionTitle = styled.h2`
  text-align: center;
  
  &:after {
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkGray};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.default};
  border: 1px solid ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const ProjectImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectType = styled.span`
  display: inline-block;
  background: ${({ theme }) => `rgba(${theme.mode === 'light' ? '123, 97, 255, 0.1' : '123, 97, 255, 0.2'})`};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ProjectTag = styled.span`
  background: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkBg};
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const ProjectLink = styled.a`
  font-size: 0.9rem;
  padding: 10px 20px;
`;