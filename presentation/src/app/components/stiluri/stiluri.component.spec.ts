import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiluriComponent } from './stiluri.component';

describe('StiluriComponent', () => {
  let component: StiluriComponent;
  let fixture: ComponentFixture<StiluriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StiluriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StiluriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
