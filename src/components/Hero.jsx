import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';
import { 
  HeroSection, 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle,
  HeroDescription,
  HeroActions,
  HeroButton,
  HeroImageContainer,
  HeroImage,
  SocialLinks,
  SocialLink,
  HeroScrollIndicator
} from '../styles/components/Hero.styles';
import { FiLinkedin, FiGithub, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <HeroSubtitle>Hello, I'm</HeroSubtitle>
          </motion.div>
          
          <HeroTitle
            as={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {personalInfo.name}
          </HeroTitle>
          
          <HeroSubtitle
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {personalInfo.title}
          </HeroSubtitle>
          
          <HeroDescription
            as={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.bio}
          </HeroDescription>
          
          <HeroActions
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <HeroButton href="#projects">View Projects</HeroButton>
            <HeroButton href="#contact" className="btn-outline">Contact Me</HeroButton>
          </HeroActions>
          
          <SocialLinks
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <SocialLink href="https://linkedin.com/in/mhdyasir2001" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={20} />
            </SocialLink>
            <SocialLink href="https://github.com/DevYasa" target="_blank" rel="noopener noreferrer">
              <FiGithub size={20} />
            </SocialLink>
            <SocialLink href={`mailto:${personalInfo.email}`}>
              <FiMail size={20} />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
        
        <HeroImageContainer
          as={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <HeroImage src={personalInfo.image} alt={personalInfo.name} />
        </HeroImageContainer>
      </HeroContainer>
      
      <HeroScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1.5, 
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      >
        <FiArrowDown size={24} />
      </HeroScrollIndicator>
    </HeroSection>
  );
};

export default Hero;