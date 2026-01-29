import {TestBed} from '@angular/core/testing';

import {IconHelper} from './icon-helper';

describe('IconHelper', () => {
  let service: IconHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
