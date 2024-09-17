import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAvancadoComponent } from './curso-avancado.component';

describe('CursoAvancadoComponent', () => {
  let component: CursoAvancadoComponent;
  let fixture: ComponentFixture<CursoAvancadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoAvancadoComponent]
    });
    fixture = TestBed.createComponent(CursoAvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
