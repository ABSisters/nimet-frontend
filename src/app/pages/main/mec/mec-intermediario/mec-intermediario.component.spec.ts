import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecIntermediarioComponent } from './mec-intermediario.component';

describe('MecIntermediarioComponent', () => {
  let component: MecIntermediarioComponent;
  let fixture: ComponentFixture<MecIntermediarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MecIntermediarioComponent]
    });
    fixture = TestBed.createComponent(MecIntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
