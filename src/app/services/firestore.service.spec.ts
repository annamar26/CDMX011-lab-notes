import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
