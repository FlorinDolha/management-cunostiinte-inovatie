import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoriSimboluriComportamenteComponent } from './valori-simboluri-comportamente.component';

describe('ValoriSimboluriComportamenteComponent', () => {
  let component: ValoriSimboluriComportamenteComponent;
  let fixture: ComponentFixture<ValoriSimboluriComportamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoriSimboluriComportamenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoriSimboluriComportamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
