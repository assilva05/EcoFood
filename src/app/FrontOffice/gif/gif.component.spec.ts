import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifComponent } from './gif.component';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifComponent]
    });
    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
