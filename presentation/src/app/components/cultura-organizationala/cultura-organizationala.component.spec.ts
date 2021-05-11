import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaOrganizationalaComponent } from './cultura-organizationala.component';

describe('CulturaOrganizationalaComponent', () => {
  let component: CulturaOrganizationalaComponent;
  let fixture: ComponentFixture<CulturaOrganizationalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaOrganizationalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaOrganizationalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
