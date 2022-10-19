import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckResultComponent } from './health-check-result.component';

describe('HealthCheckResultComponent', () => {
  let component: HealthCheckResultComponent;
  let fixture: ComponentFixture<HealthCheckResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCheckResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCheckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
