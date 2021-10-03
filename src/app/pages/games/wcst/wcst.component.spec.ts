import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcstComponent } from './wcst.component';

describe('WcstComponent', () => {
  let component: WcstComponent;
  let fixture: ComponentFixture<WcstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
