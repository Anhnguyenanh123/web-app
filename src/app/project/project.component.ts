import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Slice {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() projects: Slice[] = [];
  selectedIndex = 0;
  showPrev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }
  showNext(i: number) {
    if (this.selectedIndex < this.projects?.length - 1) {
      this.selectedIndex = i + 1;
    }
  }
}
