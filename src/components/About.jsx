import React from 'react';
import { personalInfo, education } from '../utils/data';
import { 
  AboutContainer, 
  SectionTitle, 
  AboutGrid, 
  AboutImage, 
  AboutContent, 
  Bio, 
  InfoGrid, 
  InfoItem, 
  InfoLabel, 
  InfoValue,
  EducationSection,
  EducationTitle,
  EducationList,
  EducationItem,
  Degree,
  Institution,
  Duration,
  GPA,
  DownloadButton
} from '../styles/components/About.styles';

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        
        <AboutGrid>
          <AboutImage>
            <img src={personalInfo.image} alt={personalInfo.name} />
          </AboutImage>
          
          <AboutContent>
            <Bio>{personalInfo.bio}</Bio>
            
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Name:</InfoLabel>
                <InfoValue>{personalInfo.name}</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel>Location:</InfoLabel>
                <InfoValue>{personalInfo.location}</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>{personalInfo.email}</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel>Phone:</InfoLabel>
                <InfoValue>{personalInfo.phone}</InfoValue>
              </InfoItem>
            </InfoGrid>
            
            <EducationSection>
              <EducationTitle>Education</EducationTitle>
              <EducationList>
                {education.map((edu, index) => (
                  <EducationItem key={index}>
                    <Degree>{edu.degree}</Degree>
                    <Institution>{edu.institution}</Institution>
                    <Duration>{edu.duration}</Duration>
                    <GPA>{edu.gpa}</GPA>
                  </EducationItem>
                ))}
              </EducationList>
            </EducationSection>
            
            <DownloadButton className="btn" href="/assets/resume.pdf" download>
              Download CV
            </DownloadButton>
          </AboutContent>
        </AboutGrid>
      </div>
    </AboutContainer>
  );
};

export default About;