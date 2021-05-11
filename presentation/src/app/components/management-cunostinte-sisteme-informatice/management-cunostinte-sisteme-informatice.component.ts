import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QUESTIONS } from 'src/app/questions';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-management-cunostinte-sisteme-informatice',
  templateUrl: './management-cunostinte-sisteme-informatice.component.html',
  styleUrls: ['./management-cunostinte-sisteme-informatice.component.css']
})
export class ManagementCunostinteSistemeInformaticeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openQuiz(){
    const dialogRef = this.dialog.open(QuizModalComponent, {
      data: {
        questions: QUESTIONS.questions_management_cunostinte_sisteme_informatice 
      }
    });
  }
}
