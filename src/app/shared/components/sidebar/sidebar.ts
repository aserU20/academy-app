import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  public menuItems: string[] = [
    'Introducción',
    'Objetivos',
    'Contenido',
    'Actividad',
  ];

  public selectedOption: string = 'introducción';

  @Output()
  public selectedOptionChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectOption(option: string): void {
    this.selectedOption = option;
    this.selectedOptionChange.emit(option);
  }
}
