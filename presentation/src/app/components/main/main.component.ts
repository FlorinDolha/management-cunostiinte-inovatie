import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { HttpHelperService } from 'src/app/services/httpHelper/http-helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sections: any[] = [];

  constructor(private httpHelperService: HttpHelperService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.httpHelperService.get("main").subscribe(
      _ => this.dataService.sendData(true)
    );
  }
}
