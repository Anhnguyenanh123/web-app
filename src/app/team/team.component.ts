import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  team = [
    {
      name: 'Đặng Quang Huy',
      phone: '123-456-7890',
      age: 21,
      email: 'example@example.com',
      github: 'https://www.facebook.com/',
      image: 'assets/image1.jpg',
    },
    {
      name: 'Nguyễn Hữu Phúc',
      phone: '987-654-3210',
      age: 21,
      email: 'example@example.com',
      github: 'https://www.facebook.com/',
      image: 'assets/image2.jpg',
    },
    {
      name: 'Nguyễn Công Minh Tuấn',
      phone: '555-555-5555',
      age: 21,
      email: 'example@example.com',
      github: 'https://www.facebook.com/',
      image: 'assets/image3.jpg',
    },
  ];
}
