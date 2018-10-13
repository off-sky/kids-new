import { TestBed, inject } from '@angular/core/testing';

import { TeacherDetailsResolverService } from './teacher-details-resolver.service';

describe('TeacherDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherDetailsResolverService]
    });
  });

  it('should be created', inject([TeacherDetailsResolverService], (service: TeacherDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
