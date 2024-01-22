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
