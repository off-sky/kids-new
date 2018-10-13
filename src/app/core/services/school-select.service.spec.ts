import { TestBed, inject } from '@angular/core/testing';

import { SchoolSelectService } from './school-select.service';

describe('SchoolSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolSelectService]
    });
  });

  it('should be created', inject([SchoolSelectService], (service: SchoolSelectService) => {
    expect(service).toBeTruthy();
  }));
});
