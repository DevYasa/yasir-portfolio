import styled from 'styled-components';
import { fadeIn, slideUp, slideInLeft, slideInRight } from '../../utils/animations';

export const ContactContainer = styled.section`
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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  animation: ${fadeIn} 1s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  animation: ${slideInLeft} 1s ease-in-out;
`;

export const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
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

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
`;

export const InfoIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const InfoText = styled.span`
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  
  a {
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-3px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  animation: ${slideInRight} 1s ease-in-out;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mode === 'light' ? 'white' : theme.colors.darkGray};
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  transition: ${({ theme }) => theme.transitions.fast};
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(123, 97, 255, 0.2)`};
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mode === 'light' ? 'white' : theme.colors.darkGray};
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
  transition: ${({ theme }) => theme.transitions.fast};
  min-height: 150px;
  resize: vertical;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(123, 97, 255, 0.2)`};
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
`;

export const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 1.5rem;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  animation: ${fadeIn} 0.5s ease-in-out;
`;