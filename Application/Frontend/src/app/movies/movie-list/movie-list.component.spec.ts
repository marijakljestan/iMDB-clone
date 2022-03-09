import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieList.ComponentComponent } from './movie-list.component';

describe('MovieList.ComponentComponent', () => {
  let component: MovieList.ComponentComponent;
  let fixture: ComponentFixture<MovieList.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieList.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieList.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
