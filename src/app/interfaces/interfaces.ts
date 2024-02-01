export interface NavLink {
  id: any;
  language: string;
  label: string;
  order: number;
}

export interface WorkExperience {
  id: any;
  logo: string;
  position: string;
  year: string;
  description: string;
  language: string;
  order: number;
}

export interface Project {
  id: any;
  title: string;
  description: string;
  technologiesUsed: string[];
  liveDemoLink: string;
  imagePath: string;
}

export interface Card {
  id: any;
  imageUrl: string;
  altText: string;
  organization: string;
  focusArea: string;
  additionalInfo1?: string;
  additionalInfo2?: string;
  notice?: string;
  website?: string;
  language: string;
}
export interface Skills {
  id: any;
  icon: string;
  name: string;
  description: string;
}

export interface ContactFormData {
  id: any;
  email: string;
  message: string;
}

export interface Project {
  id: any;
  title: string;
  description: string;
  description2: string;
  technologies: string[];
  image: string;
  liveDemoLink: string;
  order: number;
}

export interface WelcomeData {
  id: any;
  language: string;
  greeting: string;
  aboutHeader: string;
  aboutDescription: string;
  aboutFooter: string;
  technologies: string[];
}
export interface Password {
  password: string;
}
export interface ResumeResponse {
  token: string;
  message: string;
}
