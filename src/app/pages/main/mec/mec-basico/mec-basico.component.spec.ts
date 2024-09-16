import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecBasicoComponent } from './mec-basico.component';

describe('MecBasicoComponent', () => {
  let component: MecBasicoComponent;
  let fixture: ComponentFixture<MecBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MecBasicoComponent]
    });
    fixture = TestBed.createComponent(MecBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
