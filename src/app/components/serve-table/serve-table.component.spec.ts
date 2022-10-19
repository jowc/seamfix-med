import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeTableComponent } from './serve-table.component';

describe('ServeTableComponent', () => {
  let component: ServeTableComponent;
  let fixture: ComponentFixture<ServeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
