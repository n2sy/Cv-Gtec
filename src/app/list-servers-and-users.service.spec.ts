import { TestBed } from '@angular/core/testing';

import { ListServersAndUsersService } from './list-servers-and-users.service';

describe('ListServersAndUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListServersAndUsersService = TestBed.get(ListServersAndUsersService);
    expect(service).toBeTruthy();
  });
});
