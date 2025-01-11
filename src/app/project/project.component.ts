import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface Slice {
  imgSrc: string;
  imgAlt: string;
  weblink: string;
}

@Component({
  selector: 'app-project',
  imports: [CommonModule, NgbModule, NgbCarouselModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() projects: Slice[] = [];
}
