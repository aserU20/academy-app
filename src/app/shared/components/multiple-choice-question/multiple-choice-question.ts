import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  imports: [],
  templateUrl: './multiple-choice-question.html',
  styleUrl: './multiple-choice-question.css',
})
export class MultipleChoiceQuestion {

  @Input() question: string = '¿Qué lenguaje usa Angular principalmente?';
  @Input() options: string[] = ['JavaScript', 'TypeScript', 'Python'];
  @Input() correctIndex: number = 1;

  selectedIndex: number | null = null;
  feedback: string = '';
  isCorrect: boolean | null = null;

  submitAnswer() {
    if (this.selectedIndex === null) return;

    this.isCorrect = this.selectedIndex === this.correctIndex;

    this.feedback = this.isCorrect
      ? 'Respuesta correcta 🎉'
      : 'Respuesta incorrecta ❌';
  }
}
