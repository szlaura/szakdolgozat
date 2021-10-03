import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IowaComponent } from './iowa.component';

describe('IowaComponent', () => {
  let component: IowaComponent;
  let fixture: ComponentFixture<IowaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IowaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
