import { Component, Input } from '@angular/core';

@Component({
  selector: 'lesson-contenido',
  imports: [],
  templateUrl: './contenido.html',
  styleUrl: './contenido.css',
})
export class Contenido {
  @Input()
  public content = [
    {
      title: '¿Qué es Angular?',
      text: `
        Angular es un framework de desarrollo web basado en TypeScript que facilita la construcción de aplicaciones de una sola página (SPA).
        Incluye herramientas integradas como routing, comunicación HTTP, formularios y servicios.
      `,
    },
    {
      title: 'Características de Angular',
      text: `
        Angular es conocido por su enfoque en la construcción de aplicaciones escalables y mantenibles.
        Algunas de sus características destacadas son:
        - Enfoque en la construcción de aplicaciones escalables y mantenibles.
        - Arquitectura basada en componentes.
        - Inyección de dependencias.
        - Gestión de estado.
        - Routing y navegación.
        - Comunicación HTTP.
        - Formularios y validación.
        - Servicios y módulos.
      `,
    }
  ]
}