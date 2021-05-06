import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipIntroductionComponent } from './leadership-introduction.component';

describe('LeadershipIntroductionComponent', () => {
  let component: LeadershipIntroductionComponent;
  let fixture: ComponentFixture<LeadershipIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
