import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoIntermediarioComponent } from './curso-intermediario.component';


describe('CursoIntermediarioComponent', () => {
  let component: CursoIntermediarioComponent;
  let fixture: ComponentFixture<CursoIntermediarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoIntermediarioComponent]
    });
    fixture = TestBed.createComponent(CursoIntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
