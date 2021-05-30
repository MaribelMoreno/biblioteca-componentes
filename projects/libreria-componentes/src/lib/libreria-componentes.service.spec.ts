import { TestBed } from '@angular/core/testing';

import { LibreriaComponentesService } from './libreria-componentes.service';

describe('LibreriaComponentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibreriaComponentesService = TestBed.get(LibreriaComponentesService);
    expect(service).toBeTruthy();
  });
});
