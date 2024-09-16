import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleBasicoComponent } from './ele-basico.component';

describe('EleBasicoComponent', () => {
  let component: EleBasicoComponent;
  let fixture: ComponentFixture<EleBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EleBasicoComponent]
    });
    fixture = TestBed.createComponent(EleBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
