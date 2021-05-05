import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/httpHelper/http-helper.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  private board: any[];
  constructor(private httpHelper: HttpHelperService) { }

  ngOnInit(): void {
    this.httpHelper.get<any[]>("main/leaderboard").subscribe(
      response => {
        this.board = response;
        console.log(this.board)
      }
    )
  }

}
