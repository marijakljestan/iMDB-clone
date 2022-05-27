import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCaptionComponent } from './movie-caption.component';

describe('MovieCaptionComponent', () => {
  let component: MovieCaptionComponent;
  let fixture: ComponentFixture<MovieCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
