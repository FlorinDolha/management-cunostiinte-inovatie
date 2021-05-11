import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QUESTIONS } from 'src/app/questions';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-cultura-organizationala-cap1',
  templateUrl: './cultura-organizationala-cap1.component.html',
  styleUrls: ['./cultura-organizationala-cap1.component.css']
})
export class CulturaOrganizationalaCap1Component implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openQuiz(){
    const dialogRef = this.dialog.open(QuizModalComponent, {
      data: {
        questions: QUESTIONS.questions_cultura_organizationala 
      }
    });
  }
}
