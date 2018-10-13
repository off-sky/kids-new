import { TestBed, inject } from '@angular/core/testing';

import { TeachersByOffice.ResolverService } from './teachers-by-office.resolver.service';

describe('TeachersByOffice.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeachersByOffice.ResolverService]
    });
  });

  it('should be created', inject([TeachersByOffice.ResolverService], (service: TeachersByOffice.ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
