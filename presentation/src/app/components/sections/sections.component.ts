import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  id: number;
  level: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.level = localStorage.getItem('level')
    });
  }

   ngOnDestroy() {
   this.routeSub.unsubscribe();
  }
}
