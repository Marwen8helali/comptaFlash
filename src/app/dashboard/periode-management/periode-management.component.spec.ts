import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeManagementComponent } from './periode-management.component';

describe('PeriodeManagementComponent', () => {
  let component: PeriodeManagementComponent;
  let fixture: ComponentFixture<PeriodeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
