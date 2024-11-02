import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my projects and skills.',
      link: 'https://yousefhisham.com/portfolio'
    },
    {
      name: 'Task Manager App',
      description: 'A task management app built with Angular and Firebase to organize daily activities.',
      link: 'https://yousefhisham.com/taskmanager'
    },
    {
      name: 'Weather Dashboard',
      description: 'A real-time weather dashboard using Angular and OpenWeather API.',
      link: 'https://yousefhisham.com/weather'
    }
  ];
}