import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPerguntaComponent } from './adicionar-pergunta.component';

describe('AdicionarPerguntaComponent', () => {
  let component: AdicionarPerguntaComponent;
  let fixture: ComponentFixture<AdicionarPerguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarPerguntaComponent]
    });
    fixture = TestBed.createComponent(AdicionarPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
