import { Component } from '@angular/core';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TeamComponent, AboutComponent, ProjectComponent, NavbarComponent],
})
export class AppComponent {
  projects = [
    { imgSrc: 'assets/image1.jpg', imgAlt: 'Image 1' },
    { imgSrc: 'assets/image2.jpg', imgAlt: 'Image 2' },
    { imgSrc: 'assets/image3.jpg', imgAlt: 'Image 3' },
    { imgSrc: 'assets/image4.jpg', imgAlt: 'Image 4' },
  ];
}
