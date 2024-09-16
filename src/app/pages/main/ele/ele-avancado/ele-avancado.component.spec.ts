import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleAvancadoComponent } from './ele-avancado.component';

describe('EleAvancadoComponent', () => {
  let component: EleAvancadoComponent;
  let fixture: ComponentFixture<EleAvancadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EleAvancadoComponent]
    });
    fixture = TestBed.createComponent(EleAvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
