import styled from 'styled-components';
import { fadeIn, slideUp, slideInLeft, slideInRight } from '../../utils/animations';

export const AboutContainer = styled.section`
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

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  animation: ${fadeIn} 1s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  animation: ${slideInLeft} 1s ease-in-out;
  
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid ${({ theme }) => theme.colors.accent};
    border-radius: 15px;
    z-index: -1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

export const AboutContent = styled.div`
  animation: ${slideInRight} 1s ease-in-out;
`;

export const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: baseline;
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const InfoValue = styled.span`
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
`;

export const EducationSection = styled.div`
  margin-bottom: 2rem;
  animation: ${slideUp} 1s ease-in-out;
`;

export const EducationTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
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

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const EducationItem = styled.div`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const Degree = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
`;

export const Institution = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 0.5rem;
`;

export const Duration = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`;

export const GPA = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  
  &:before {
    content: '📄';
    margin-right: 8px;
  }
`;