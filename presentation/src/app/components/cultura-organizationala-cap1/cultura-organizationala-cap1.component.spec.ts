import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaOrganizationalaCap1Component } from './cultura-organizationala-cap1.component';

describe('CulturaOrganizationalaCap1Component', () => {
  let component: CulturaOrganizationalaCap1Component;
  let fixture: ComponentFixture<CulturaOrganizationalaCap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaOrganizationalaCap1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaOrganizationalaCap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
