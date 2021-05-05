import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';
import { QUESTIONS } from "../../questions";

@Component({
  selector: 'app-leadership-introduction',
  templateUrl: './leadership-introduction.component.html',
  styleUrls: ['./leadership-introduction.component.css']
})
export class LeadershipIntroductionComponent implements OnInit {
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
