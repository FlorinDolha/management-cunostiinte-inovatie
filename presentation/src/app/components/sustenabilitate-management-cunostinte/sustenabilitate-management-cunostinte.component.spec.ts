import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustenabilitateManagementCunostinteComponent } from './sustenabilitate-management-cunostinte.component';

describe('SustenabilitateManagementCunostinteComponent', () => {
  let component: SustenabilitateManagementCunostinteComponent;
  let fixture: ComponentFixture<SustenabilitateManagementCunostinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustenabilitateManagementCunostinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustenabilitateManagementCunostinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
