import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGoogleMapsComponent } from './api-google-maps.component';

describe('ApiGoogleMapsComponent', () => {
  let component: ApiGoogleMapsComponent;
  let fixture: ComponentFixture<ApiGoogleMapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiGoogleMapsComponent]
    });
    fixture = TestBed.createComponent(ApiGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
