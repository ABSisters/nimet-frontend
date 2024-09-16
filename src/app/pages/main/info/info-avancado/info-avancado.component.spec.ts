import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAvancadoComponent } from './info-avancado.component';

describe('InfoAvancadoComponent', () => {
  let component: InfoAvancadoComponent;
  let fixture: ComponentFixture<InfoAvancadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAvancadoComponent]
    });
    fixture = TestBed.createComponent(InfoAvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
