import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceManagementComponent } from './exercice-management.component';

describe('ExerciceManagementComponent', () => {
  let component: ExerciceManagementComponent;
  let fixture: ComponentFixture<ExerciceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
