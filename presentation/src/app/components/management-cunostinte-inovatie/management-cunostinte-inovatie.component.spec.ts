import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCunostinteInovatieComponent } from './management-cunostinte-inovatie.component';

describe('ManagementCunostinteInovatieComponent', () => {
  let component: ManagementCunostinteInovatieComponent;
  let fixture: ComponentFixture<ManagementCunostinteInovatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCunostinteInovatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCunostinteInovatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
