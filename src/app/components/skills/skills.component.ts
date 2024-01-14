import { Component } from '@angular/core';

interface Skill {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      icon: '/assets/images/icon-javscript.png',
      name: 'Javascript',
      description:
        'Versatile language for interactive web pages. Controls browsers dynamically, processes user interactions, and updates page content.',
    },
    {
      icon: '/assets/images/icon-typescript.png',
      name: 'Typescript',
      description:
        'JavaScript superset with static typing for clear and error-resistant code. Ideal for efficient and scalable development.',
    },
    {
      icon: '/assets/images/icon-sass.png',
      name: 'SCSS/SASS',
      description:
        'CSS preprocessor with variables, nested selectors, and mixins. Simplifies stylesheet creation through structured, extensible syntax.',
    },
    {
      icon: '/assets/images/icon-git.png',
      name: 'Git/Github',
      description:
        'Web platform for Git version control. Enables collaborative software development, tracking code changes seamlessly.',
    },
    {
      icon: '/assets/images/icon-express.png',
      name: 'Express',
      description:
        'Minimalist Node.js web framework. Streamlines robust and scalable server-side app development, popular for APIs and web apps.',
    },
    {
      icon: '/assets/images/icon-mongodb.png',
      name: 'MognoDB',
      description:
        'NoSQL document-oriented database providing flexible, JSON-like data storage. Popular choice for modern, scalable applications.',
    },
    {
      icon: '../../../assets/images/icon-nodejs.svg',
      name: 'NodeJS',
      description:
        'Server-side JavaScript platform for scalable, efficient backend applications outside the browser.',
    },
    {
      icon: '/assets/images/icon-postgresql.png',
      name: 'PostGreSQL',
      description:
        'Open-source relational database management system known for scalability and robust features. Widely used in diverse applications.',
    },
    {
      icon: '/assets/images/icon-nest.svg',
      name: 'Nest JS',
      description:
        'NestJS: A powerful Node.js framework for server-side development, combining TypeScript/JavaScript flexibility.',
    },
    {
      icon: '../../../assets/images/ang.png',
      name: 'Angular',
      description:
        'CSS framework with low-level utility classes. Enables efficient and highly customizable UI creation directly in the markup.',
    },
  ];

  isRotated: boolean[] = Array(this.skills.length).fill(false);

  rotateDiv(index: number) {
    this.isRotated[index] = !this.isRotated[index];
  }
}
