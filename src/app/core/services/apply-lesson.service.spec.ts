import { TestBed, inject } from '@angular/core/testing';

import { ApplyLessonService } from './apply-lesson.service';

describe('ApplyLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplyLessonService]
    });
  });

  it('should be created', inject([ApplyLessonService], (service: ApplyLessonService) => {
    expect(service).toBeTruthy();
  }));
});
