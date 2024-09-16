import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleMedioComponent } from './ele-medio.component';

describe('EleMedioComponent', () => {
  let component: EleMedioComponent;
  let fixture: ComponentFixture<EleMedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EleMedioComponent]
    });
    fixture = TestBed.createComponent(EleMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
