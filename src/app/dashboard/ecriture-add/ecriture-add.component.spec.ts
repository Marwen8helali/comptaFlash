import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcritureAddComponent } from './ecriture-add.component';

describe('EcritureAddComponent', () => {
  let component: EcritureAddComponent;
  let fixture: ComponentFixture<EcritureAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcritureAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcritureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
