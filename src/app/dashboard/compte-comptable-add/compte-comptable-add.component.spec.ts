import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteComptableAddComponent } from './compte-comptable-add.component';

describe('CompteComptableAddComponent', () => {
  let component: CompteComptableAddComponent;
  let fixture: ComponentFixture<CompteComptableAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteComptableAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteComptableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
