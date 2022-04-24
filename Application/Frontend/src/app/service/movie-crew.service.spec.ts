import { TestBed } from '@angular/core/testing';

import { MovieCrewService } from './movie-crew.service';

describe('MovieCrewService', () => {
  let service: MovieCrewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCrewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
