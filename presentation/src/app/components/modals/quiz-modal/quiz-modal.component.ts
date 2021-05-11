import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'quiz-modal',
  templateUrl: './quiz-modal.component.html',
  styleUrls: ['./quiz-modal.component.css']
})
export class QuizModalComponent implements OnInit {
  index: number = 0;
  showAnswers: Boolean = false;
  nextEnabled: Boolean = false;
  nextVisible: Boolean = false;
  okEnabled: Boolean = true;
  correctAnswers: number = 0;
  answer0: any = false;
  answer1: any = false;
  answer2: any = false;
  questions: any[];

  constructor(private dialogRef: MatDialogRef<QuizModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.questions = data.questions;
  }
  ngOnInit(): void {
    this.dialogRef.updateSize('750px','450px');
    this.recheck();
  }
  
  next(){
    this.index += 1;
    this.nextEnabled = false;
    this.showAnswers = false;
    this.okEnabled = true;
    this.answer0 = false;
    this.answer1 = false;
    this.answer2 = false;
    this.recheck();
  }

  ok(){
    this.correctAnswers += 
      (this.answer0 === this.questions[this.index].answers[0].correct &&
      this.answer1 === this.questions[this.index].answers[1].correct &&
      this.answer2 === this.questions[this.index].answers[2].correct) ? 1 : 0;
    this.showAnswers = true;
    this.nextEnabled = true;
    this.okEnabled = false;
    this.recheck();

    if (!this.nextVisible){
      setTimeout(() => {
        this.dialogRef.close(this.correctAnswers);
      }, 2000);
    }
  }

  private recheck(){
    this.nextVisible = !(this.questions.length === this.index + 1)
  }
}