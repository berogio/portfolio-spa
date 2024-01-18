import { Component } from '@angular/core';

interface WorkExperience {
  logo: string;
  position: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: WorkExperience[] = [
    {
      logo: '/assets/images/upwork.png',
      position: 'Fullstack Developer',
      year: '2023-',
      description:
        'As a Fullstack Developer at OZG, my focus was on crafting user-friendly web applications. With proficient knowledge in HTML, CSS, SCSS, Bootstrap, Angular, Angular Material, TypeOrm, Express.js and Node.js, I designed responsive user interfaces and developed dynamic, interactive single-page applications. My specific contribution involved the development of forms, enabling efficient data collection and processing. Applying agile methodologies and integrating databases, I contributed to the continuous improvement of the application landscape.',
    },
    {
      logo: '/assets/images/upwork.png',
      position: 'Junior Developer',
      year: '2022-2023',
      description:
        'As a Junior Developer from 2022 to 2023 at betlive.com, I had the opportunity to work as a software engineer, contributing to the development of innovative solutions for the online casino`s software platform. Collaborating with a dynamic team of developers, I played a role in optimizing the performance and efficiency of the platform to ensure an outstanding user experience for players worldwide. My responsibilities included continuously improving functionality and adapting to the evolving requirements of the online gambling industry. During my time at betlive.com, I was able to continually expand and apply my skills as a Junior Developer.',
    },
    {
      logo: '/assets/images/upwork.png',
      position: 'Software Tester',
      year: '2021-2022',
      description:
        'As a Junior Software Tester, my role involved ensuring the quality of software products and assisting developers in identifying and resolving issues. My tasks included: Test Planning and Design: Developing test plans based on software requirements and specifications. Designing test cases and scenarios for various functionalities. Test Execution: Conducting manual tests to ensure the software functions according to requirements. Automating test scripts for repeatable tests in regular checks. Bug Identification and Reporting: Identifying, documenting, and tracking software bugs. Generating concise bug reports for developer teams. Collaboration with Developers: Collaborating closely with development teams to address and resolve identified issues.',
    },
  ];
}
