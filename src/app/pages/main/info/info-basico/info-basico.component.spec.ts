import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBasicoComponent } from './info-basico.component';

describe('InfoBasicoComponent', () => {
  let component: InfoBasicoComponent;
  let fixture: ComponentFixture<InfoBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoBasicoComponent]
    });
    fixture = TestBed.createComponent(InfoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
