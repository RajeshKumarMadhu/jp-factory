import { TestBed, async, inject } from '@angular/core/testing';

import { AppGaurdGuard } from './app-gaurd.guard';

describe('AppGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGaurdGuard]
    });
  });

  it('should ...', inject([AppGaurdGuard], (guard: AppGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
