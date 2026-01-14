import { TestBed } from '@angular/core/testing';

import { Taskmaster } from './taskmaster';

describe('Taskmaster', () => {
  let service: Taskmaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Taskmaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
