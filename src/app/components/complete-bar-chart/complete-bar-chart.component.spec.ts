import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteBarChartComponent } from './complete-bar-chart.component';

describe('CompleteBarChartComponent', () => {
  let component: CompleteBarChartComponent;
  let fixture: ComponentFixture<CompleteBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
