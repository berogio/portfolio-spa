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
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide. As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
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
