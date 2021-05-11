import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QUESTIONS } from 'src/app/questions';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-sustenabilitate-management-cunostinte',
  templateUrl: './sustenabilitate-management-cunostinte.component.html',
  styleUrls: ['./sustenabilitate-management-cunostinte.component.css']
})
export class SustenabilitateManagementCunostinteComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openQuiz(){
    const dialogRef = this.dialog.open(QuizModalComponent, {
      data: {
        questions: QUESTIONS.questions_leadership_introduction 
      }
    });
  }

}
