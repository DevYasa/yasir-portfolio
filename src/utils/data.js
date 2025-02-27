export const personalInfo = {
    name: "Mohamed Yasir",
    title: "UI/UX Designer",
    location: "Matara, Sri Lanka",
    email: "mhdyasir132@gmail.com",
    phone: "+94 76 36 39 741",
    image: `${import.meta.env.VITE_PUBLIC_URL}/assets/profile.jpg`,
    bio: "Detail-oriented UI/UX Designer with frontend development background and a passion for creating intuitive, user-centered experiences. Combines strong visual design skills with technical knowledge to develop responsive interfaces that balance aesthetics and functionality."
  };
  
  export const skills = [
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      category: "Technical Skills",
      items: ["HTML/CSS", "Javascript", "Responsive Design", "Prototyping", "Wireframing", "User Flows"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Collaboration", "Communication", "Time Management"]
    },
    {
      category: "Languages",
      items: ["English", "Sinhala", "Tamil"]
    }
  ];
  
  export const education = [
    {
      degree: "HND in Software Engineering",
      institution: "National Institute of Business Management (NIBM)",
      duration: "2023-2024",
      gpa: "3.61/4 GPA"
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "National Institute of Business Management (NIBM)",
      duration: "2022-2023",
      gpa: "3.98/4 GPA"
    }
  ];
  
  export const experience = [
    {
      position: "Graphic Designer (Part Time)",
      company: "Rainbow Advertising",
      duration: "2021-Present",
      responsibilities: [
        "Collaborated with creative team to design compelling visual materials for diverse client campaigns",
        "Created consistent brand identities across multiple platforms and marketing materials",
        "Utilized industry-standard design tools to deliver high-quality assets on tight deadlines"
      ]
    }
  ];
  
  export const projects = [
    {
      title: "Hanover Pizza POS System",
      type: "Web App",
      description: "A complete point-of-sale system with intuitive UI for a pizza restaurant, featuring cohesive branding with a distinctive color scheme and user-friendly interfaces for menu navigation, order management, and inventory control.",
      image: `${import.meta.env.VITE_PUBLIC_URL}/assets/projects/hanover-pizza.png`,
      link: "https://www.behance.net/gallery/219955129/Pizza-POS-Billing-System",
      tags: ["UI/UX Design", "Web Development", "POS System"]
    },
    {
      title: "Homestead Furniture Shop",
      type: "Web App",
      description: "Attractive UI for a furniture shop featuring cohesive branding with a distinctive color scheme and user-friendly interfaces for collections and catalog.",
      image: `${import.meta.env.VITE_PUBLIC_URL}/assets/projects/homestead-furniture.png`,
      link: "https://www.behance.net/gallery/220061447/Homestead-Furniture-Shop-Website-Design",
      tags: ["UI/UX Design", "Web Development", "E-commerce"]
    }
  ];
  
  export const references = [
    {
      name: "Ms. Chami Dilhani Muthugamage",
      position: "Lecturer",
      organization: "Department of Computer Science, National Institute of Business Management (NIBM)",
      email: "chami@NIBM.lk"
    },
    {
      name: "Mr. Mohamed Zumair",
      position: "AI Principal Engineer",
      organization: "Pearson",
      email: "mohamed.zumair@pearson.com"
    }
  ];
  
  export const navLinks = [
    {
      id: "hero",
      title: "Home"
    },
    {
      id: "about",
      title: "About"
    },
    {
      id: "skills",
      title: "Skills"
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "experience",
      title: "Experience"
    },
    {
      id: "contact",
      title: "Contact"
    }
  ];