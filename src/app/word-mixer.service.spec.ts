import { TestBed } from '@angular/core/testing';

import { WordMixerService } from './word-mixer.service';

describe('WordMixerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordMixerService = TestBed.get(WordMixerService);
    expect(service).toBeTruthy();
  });
});
