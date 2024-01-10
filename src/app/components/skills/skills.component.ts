import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  isRotated: boolean[] = Array(10).fill(false);

  rotateDiv(index: number) {
    this.isRotated[index] = !this.isRotated[index];
  }
}
