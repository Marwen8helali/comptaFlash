import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeAddComponent } from './periode-add.component';

describe('PeriodeAddComponent', () => {
  let component: PeriodeAddComponent;
  let fixture: ComponentFixture<PeriodeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
