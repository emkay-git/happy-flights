import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInfoBoxComponent } from './flight-info-box.component';

describe('FlightInfoBoxComponent', () => {
  let component: FlightInfoBoxComponent;
  let fixture: ComponentFixture<FlightInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
