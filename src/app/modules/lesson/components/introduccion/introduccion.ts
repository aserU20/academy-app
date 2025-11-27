import { Component, Input } from '@angular/core';

@Component({
  selector: 'lesson-introduccion',
  imports: [],
  templateUrl: './introduccion.html',
  styleUrl: './introduccion.css',
})
export class Introduccion {
  @Input()
  public text: string = `
    Angular es un framework moderno desarrollado por Google para crear aplicaciones web dinámicas, escalables y fáciles de mantener.
    Su estructura basada en componentes permite organizar el código en partes independientes y reutilizables, logrando aplicaciones más ordenadas y eficientes.

    En esta lección conocerás los conceptos básicos para comprender cómo funciona Angular y cómo se estructura un proyecto.
  `;
}
