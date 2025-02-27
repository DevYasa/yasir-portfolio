import React from 'react';
import { projects } from '../utils/data';
import { 
  ProjectsContainer, 
  SectionTitle, 
  ProjectsGrid, 
  ProjectCard, 
  ProjectImage, 
  ProjectContent, 
  ProjectType, 
  ProjectTitle, 
  ProjectDescription, 
  ProjectTags, 
  ProjectTag, 
  ProjectLink 
} from '../styles/components/Projects.styles';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <SectionTitle>My Projects</SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              
              <ProjectContent>
                <ProjectType>{project.type}</ProjectType>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTags>
                  {project.tags.map((tag, idx) => (
                    <ProjectTag key={idx}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                
                <ProjectLink href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                  View Project
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;