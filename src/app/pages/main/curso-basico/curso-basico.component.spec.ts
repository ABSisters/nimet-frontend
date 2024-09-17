import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoBasicoComponent } from './curso-basico.component';


describe('CursoBasicoComponent', () => {
  let component: CursoBasicoComponent;
  let fixture: ComponentFixture<CursoBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoBasicoComponent]
    });
    fixture = TestBed.createComponent(CursoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
