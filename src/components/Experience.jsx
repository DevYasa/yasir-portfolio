import React from 'react';
import styled from 'styled-components';
import { experience, education } from '../utils/data';

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <ExperienceContainer>
          <ExperienceColumn>
            <h3>Work Experience</h3>
            {experience.map((job, index) => (
              <ExperienceCard key={index}>
                <ExperienceCardHeader>
                  <div>
                    <ExperienceTitle>{job.position}</ExperienceTitle>
                    <ExperienceCompany>{job.company}</ExperienceCompany>
                  </div>
                  <ExperienceDuration>{job.duration}</ExperienceDuration>
                </ExperienceCardHeader>
                <ExperienceResponsibilities>
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ExperienceResponsibilities>
              </ExperienceCard>
            ))}
          </ExperienceColumn>
          
          <ExperienceColumn>
            <h3>Education</h3>
            {education.map((edu, index) => (
              <ExperienceCard key={index}>
                <ExperienceCardHeader>
                  <div>
                    <ExperienceTitle>{edu.degree}</ExperienceTitle>
                    <ExperienceCompany>{edu.institution}</ExperienceCompany>
                  </div>
                  <ExperienceDuration>{edu.duration}</ExperienceDuration>
                </ExperienceCardHeader>
                <ExperienceGPA>
                  <span>GPA:</span> {edu.gpa}
                </ExperienceGPA>
              </ExperienceCard>
            ))}
          </ExperienceColumn>
        </ExperienceContainer>
        
        <CtaContainer>
          <p>Want to know more about my professional background?</p>
          <a href="#contact" className="btn">Get In Touch</a>
        </CtaContainer>
      </div>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
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

const ExperienceContainer = styled.div`
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

const ExperienceColumn = styled.div`
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

const ExperienceCard = styled.div`
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

const ExperienceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ExperienceTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
`;

const ExperienceCompany = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0 0;
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.gray : theme.colors.lightText};
`;

const ExperienceDuration = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.mode === 'light' 
    ? 'rgba(123, 97, 255, 0.1)' 
    : 'rgba(123, 97, 255, 0.2)'};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
`;

const ExperienceResponsibilities = styled.ul`
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

const ExperienceGPA = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const CtaContainer = styled.div`
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

export default Experience;