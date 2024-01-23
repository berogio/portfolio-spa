export interface WorkExperience {
  logo: string;
  position: string;
  year: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologiesUsed: string[];
  liveDemoLink: string;
  imagePath: string;
}

export interface Card {
  imageUrl: string;
  altText: string;
  organization: string;
  focusArea: string;
  additionalInfo1?: string;
  additionalInfo2?: string;
  notice?: string;
  website?: string;
}
export interface Skills {
  icon: string;
  name: string;
  description: string;
}

export interface ContactFormData {
  email: string;
  message: string;
}

export interface Project {
  title: string;
  description: string;
  description2: string;
  technologies: string[];
  image: string;
  liveDemoLink: string;
}
