import { TestBed } from '@angular/core/testing';

import { EdgeRulesDataService } from './edge-rules-data.service';

describe('EdgeRulesDataService', () => {
  let service: EdgeRulesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeRulesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
