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
