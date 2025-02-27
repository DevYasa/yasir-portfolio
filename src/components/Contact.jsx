import React, { useState } from 'react';
import { personalInfo } from '../utils/data';
import { 
  ContactContainer, 
  SectionTitle, 
  ContactGrid, 
  ContactInfo, 
  InfoTitle, 
  InfoList, 
  InfoItem, 
  InfoIcon, 
  InfoText, 
  ContactForm, 
  FormGroup, 
  Input, 
  TextArea, 
  SubmitButton, 
  SocialLinks, 
  SocialLink,
  SuccessMessage
} from '../styles/components/Contact.styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <ContactContainer id="contact">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <InfoText>{personalInfo.location}</InfoText>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>📧</InfoIcon>
                <InfoText>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </InfoText>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>📱</InfoIcon>
                <InfoText>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
                </InfoText>
              </InfoItem>
            </InfoList>
            
            <SocialLinks>
              <SocialLink href="https://github.com/DevYasa" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </SocialLink>
              
              <SocialLink href="https://linkedin.com/in/mhdyasir2001" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </SocialLink>
              
              <SocialLink href="https://www.behance.net/yasir2001" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            {isSubmitted ? (
              <SuccessMessage>
                Thank you for your message! I'll get back to you soon.
              </SuccessMessage>
            ) : (
              <>
                <FormGroup>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <TextArea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <SubmitButton type="submit" className="btn">
                  Send Message
                </SubmitButton>
              </>
            )}
          </ContactForm>
        </ContactGrid>
      </div>
    </ContactContainer>
  );
};

export default Contact;