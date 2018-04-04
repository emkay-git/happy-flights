import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAdsComponent } from './image-ads.component';

describe('ImageAdsComponent', () => {
  let component: ImageAdsComponent;
  let fixture: ComponentFixture<ImageAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
