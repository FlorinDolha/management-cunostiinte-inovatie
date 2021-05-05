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
  answer: any;
  questions: any[] = [
    {"question": "faaaaa?", "answers": [{"answer": "dsafda", "correct": false}, {"answer": "ggaga", "correct": true}]},
    {"question": "fassaaaa?", "answers": [{"answer": "dsfafaafda", "correct": true}]},
    {"question": "fagfagafaa?", "answers": [{"answer": "dsafafafda", "correct": true}]}
  ];

  constructor(private dialogRef: MatDialogRef<QuizModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.questions = data.questions;
  }
  ngOnInit(): void {
    this.dialogRef.updateSize('450px','450px');
    this.recheck();
  }
  
  next(){
    this.index += 1;
    this.nextEnabled = false;
    this.showAnswers = false;
    this.answer = undefined;
    this.recheck();
  }

  prev(){
    this.index -= 1;
    this.nextEnabled = false;
    this.showAnswers = false;
    this.answer = undefined;
    this.recheck();
  }

  ok(){
    this.showAnswers = true;
    this.nextEnabled = true;
    this.recheck();

    if (!this.nextVisible){
      setTimeout(() => {
        this.dialogRef.close();
      }, 2000);
    }
  }

  private recheck(){
    this.nextVisible = !(this.questions.length === this.index + 1)
  }
}