import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data/data.service';
import { LoadingService } from './services/loading/loading.service';
import { SettingsService } from './services/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = false;
  loggedIn: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private settingsService: SettingsService,
    private router: Router,
    public dataService: DataService) { }

    ngOnInit() {
      this.dataService.subject.subscribe(
        value => this.loggedIn = value
      )
      this.listenToLoading();
    }

    logout(){
      this.settingsService.setCredentials('', '');
      this.dataService.sendData(false);
      this.router.navigate(['/login']);
    }

    listenToLoading(): void {
      this.loadingService.loadingSubject
        .subscribe((loading) => {
          setTimeout(() => { ///Have to do this because ExpressionChangedAfterItHasBeenCheckedError
            this.loading = loading;
          });
        });
    }
}
