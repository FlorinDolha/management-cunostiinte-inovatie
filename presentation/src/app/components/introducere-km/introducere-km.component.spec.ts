import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducereKMComponent } from './introducere-km.component';

describe('IntroducereKMComponent', () => {
  let component: IntroducereKMComponent;
  let fixture: ComponentFixture<IntroducereKMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducereKMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducereKMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
