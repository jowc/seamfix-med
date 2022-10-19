import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckResultSingleComponent } from './health-check-result-single.component';

describe('HealthCheckResultSingleComponent', () => {
  let component: HealthCheckResultSingleComponent;
  let fixture: ComponentFixture<HealthCheckResultSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCheckResultSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCheckResultSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
