import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLittleCirclesComponent } from './three-little-circles.component';

describe('ThreeLittleCirclesComponent', () => {
  let component: ThreeLittleCirclesComponent;
  let fixture: ComponentFixture<ThreeLittleCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeLittleCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLittleCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
