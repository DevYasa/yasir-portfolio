import React from 'react';
import styled from 'styled-components';
import { personalInfo } from '../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterLogo>
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
          </FooterLogo>
          
          <FooterLinks>
            <FooterLinksColumn>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </FooterLinksColumn>
            
            <FooterLinksColumn>
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>
                <li><a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></li>
                <li>{personalInfo.location}</li>
              </ul>
            </FooterLinksColumn>
          </FooterLinks>
        </FooterContent>
        
        <FooterDivider />
        
        <FooterBottom>
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <SocialLinks>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="Behance">
              <i className="fab fa-behance"></i>
            </a>
          </SocialLinks>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightGray : theme.colors.darkGray};
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterLogo = styled.div`
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

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterLinksColumn = styled.div`
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

const FooterDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
  margin: 30px 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
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

export default Footer;