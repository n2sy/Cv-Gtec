import { TestBed } from '@angular/core/testing';

import { ListeRecrueService } from './liste-recrue.service';

describe('ListeRecrueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeRecrueService = TestBed.get(ListeRecrueService);
    expect(service).toBeTruthy();
  });
});
