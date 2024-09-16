import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIntermediarioComponent } from './info-intermediario.component';

describe('InfoIntermediarioComponent', () => {
  let component: InfoIntermediarioComponent;
  let fixture: ComponentFixture<InfoIntermediarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoIntermediarioComponent]
    });
    fixture = TestBed.createComponent(InfoIntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
