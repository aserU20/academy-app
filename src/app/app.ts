import { Component } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Navigation } from './shared/components/navigation/navigation';
import { Lesson } from './modules/lesson/lesson';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Navigation, Lesson],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public selectedOption: string = 'introducción';

}
