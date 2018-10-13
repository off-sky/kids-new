import { TestBed, inject } from '@angular/core/testing';

import { InfoPopupService } from './info-popup.service';

describe('InfoPopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPopupService]
    });
  });

  it('should be created', inject([InfoPopupService], (service: InfoPopupService) => {
    expect(service).toBeTruthy();
  }));
});
