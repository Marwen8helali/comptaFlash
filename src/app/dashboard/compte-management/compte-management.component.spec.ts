import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteManagementComponent } from './compte-management.component';

describe('CompteManagementComponent', () => {
  let component: CompteManagementComponent;
  let fixture: ComponentFixture<CompteManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
