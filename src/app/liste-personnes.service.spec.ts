import { TestBed } from '@angular/core/testing';

import { ListePersonnesService } from './liste-personnes.service';

describe('ListePersonnesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListePersonnesService = TestBed.get(ListePersonnesService);
    expect(service).toBeTruthy();
  });
});
