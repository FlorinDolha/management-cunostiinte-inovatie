import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QUESTIONS } from 'src/app/questions';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-introducere-km',
  templateUrl: './introducere-km.component.html',
  styleUrls: ['./introducere-km.component.css']
})
export class IntroducereKMComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openQuiz(){
    const dialogRef = this.dialog.open(QuizModalComponent, {
      data: {
        questions: QUESTIONS.questions_introducere_km 
      }
    });
  }
}
