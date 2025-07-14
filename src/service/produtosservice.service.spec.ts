import { TestBed } from '@angular/core/testing';

import { ProdutosserviceService } from './produtosservice.service';

describe('ProdutosserviceService', () => {
  let service: ProdutosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
