import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCunostinteSistemeInformaticeComponent } from './management-cunostinte-sisteme-informatice.component';

describe('ManagementCunostinteSistemeInformaticeComponent', () => {
  let component: ManagementCunostinteSistemeInformaticeComponent;
  let fixture: ComponentFixture<ManagementCunostinteSistemeInformaticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCunostinteSistemeInformaticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCunostinteSistemeInformaticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
