import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QUESTIONS } from 'src/app/questions';
import { HttpHelperService } from 'src/app/services/httpHelper/http-helper.service';
import { QuizModalComponent } from '../modals/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[];
  constructor(public dialog: MatDialog,
    private httpHelperService: HttpHelperService) {}

  ngOnInit(): void {
    this.questions = QUESTIONS.questions_cultura.concat(QUESTIONS.questions_gen)
                                                .concat(QUESTIONS.questions_leadership_introduction)
                                                .concat(QUESTIONS.questions_stiluri);

    this.questions = this.shuffle(this.questions);
  }

  private shuffle(array): any[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  openQuiz(){
    const dialogRef = this.dialog.open(QuizModalComponent, {
      data: {
        questions: this.questions.slice(0, 10)
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.httpHelperService.post(`main/leaderboard/${localStorage.getItem('nickname')}/${result}`, undefined).subscribe(
        response => console.log(response)
      )
    });
  }

}
