import { TestBed } from '@angular/core/testing';

import { LoadproductsService } from './loadproducts.service';

describe('LoadproductsService', () => {
  let service: LoadproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
