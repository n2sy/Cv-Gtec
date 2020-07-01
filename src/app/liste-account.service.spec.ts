import { TestBed } from '@angular/core/testing';

import { ListeAccountService } from './liste-account.service';

describe('ListeAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeAccountService = TestBed.get(ListeAccountService);
    expect(service).toBeTruthy();
  });
});
