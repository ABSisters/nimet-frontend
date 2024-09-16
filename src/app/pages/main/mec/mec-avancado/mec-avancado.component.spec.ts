import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecAvancadoComponent } from './mec-avancado.component';

describe('MecAvancadoComponent', () => {
  let component: MecAvancadoComponent;
  let fixture: ComponentFixture<MecAvancadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MecAvancadoComponent]
    });
    fixture = TestBed.createComponent(MecAvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
