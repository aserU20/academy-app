import { Component, Input } from '@angular/core';

@Component({
  selector: 'lesson-objetivos',
  imports: [],
  templateUrl: './objetivos.html',
  styleUrl: './objetivos.css',
})
export class Objetivos {
  @Input()
  public list: string[] = [
    'Comprender los conceptos básicos de Angular',
    'Estructurar un proyecto Angular',
    'Utilizar componentes para organizar el código',
    'Comprender la directiva ngFor para iterar sobre arrays',
    'Comprender la directiva ngIf para mostrar u ocultar elementos',
  ];
}
