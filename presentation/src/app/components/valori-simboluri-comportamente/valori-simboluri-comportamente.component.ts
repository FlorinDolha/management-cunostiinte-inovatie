import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QUESTIONS } from 'src/app/questions';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-valori-simboluri-comportamente',
  templateUrl: './valori-simboluri-comportamente.component.html',
  styleUrls: ['./valori-simboluri-comportamente.component.css']
})
export class ValoriSimboluriComportamenteComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openQuiz(){
    const dialogRef = this.dialog.open(QuizModalComponent, {
      data: {
        questions: QUESTIONS.questions_valori_simboluri_comportamente 
      }
    });
  }
}
