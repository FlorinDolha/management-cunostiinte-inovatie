import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { HttpHelperService } from 'src/app/services/httpHelper/http-helper.service';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sections: any[] = [];
  username: string;
  nickname: string;

  constructor(private httpHelperService: HttpHelperService,
    private dataService: DataService,
    private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.httpHelperService.getString(`main/nickname/${this.settingsService.getCredentials().username}`).subscribe(
      response => {
        localStorage.setItem('nickname', response);
        this.username = this.settingsService.getCredentials().username;
        this.nickname = response;
        this.dataService.sendData(true)
      }
    );
  }
}