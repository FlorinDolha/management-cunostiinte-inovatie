import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/httpHelper/http-helper.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  public board: any[];
  mynickname: string;
  constructor(private httpHelper: HttpHelperService) { }

  ngOnInit(): void {
    this.mynickname = localStorage.getItem('nickname');
    this.httpHelper.get<any[]>("main/leaderboard").subscribe(
      response => {
        this.board = response;
        console.log(this.board)
      }
    )
  }

}
