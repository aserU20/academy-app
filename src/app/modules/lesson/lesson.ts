import { Component, Input } from '@angular/core';
import { Introduccion } from './components/introduccion/introduccion';
import { Objetivos } from './components/objetivos/objetivos';
import { Contenido } from './components/contenido/contenido';
import { Actividad } from './components/actividad/actividad';

@Component({
  selector: 'app-lesson',
  imports: [Introduccion, Objetivos, Contenido, Actividad],
  templateUrl: './lesson.html',
  styleUrl: './lesson.css',
})
export class Lesson {
  @Input()
  public selectedOption: string = '';
}
