import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input()
  public title: string = 'Angular Framework';

  @Input()
  public numberLesson: number = 1;
}
