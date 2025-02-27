import React from 'react';
import { skills } from '../utils/data';
import { SkillsContainer, SectionTitle, SkillsGrid, SkillCategory, CategoryTitle, SkillsList, SkillItem } from '../styles/components/Skills.styles';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <div className="container">
        <SectionTitle>My Skills</SectionTitle>
        
        <SkillsGrid>
          {skills.map((skillGroup, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{skillGroup.category}</CategoryTitle>
              <SkillsList>
                {skillGroup.items.map((skill, idx) => (
                  <SkillItem key={idx}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

export default Skills;