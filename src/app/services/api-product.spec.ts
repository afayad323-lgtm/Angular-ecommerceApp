import { TestBed } from '@angular/core/testing';

import { ApiProduct } from './api-product';

describe('ApiProduct', () => {
  let service: ApiProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
