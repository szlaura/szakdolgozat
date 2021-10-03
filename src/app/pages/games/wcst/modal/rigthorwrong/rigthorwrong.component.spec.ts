import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthorwrongComponent } from './rigthorwrong.component';

describe('RigthorwrongComponent', () => {
  let component: RigthorwrongComponent;
  let fixture: ComponentFixture<RigthorwrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthorwrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthorwrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
