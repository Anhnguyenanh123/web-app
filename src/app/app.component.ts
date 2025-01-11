import { Component } from '@angular/core';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    TeamComponent,
    AboutComponent,
    ProjectComponent,
    NavbarComponent,
    NgbModule,
    NgbCarouselModule,
  ],
})
export class AppComponent {
  projects = [
    {
      imgSrc: 'assets/image4.jpg',
      imgAlt: 'Image 1',
      weblink: 'https://pog.threemusketeer.click/',
    },
    {
      imgSrc: 'assets/image5.jpg',
      imgAlt: 'Image 2',
      weblink: 'http://pog.threemusketeer.click:3001/',
    },
    {
      imgSrc: 'assets/image6.jpg',
      imgAlt: 'Image 3',
      weblink: 'http://pog.threemusketeer.click:3000/',
    },
  ];
}
