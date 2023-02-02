import { TestBed } from '@angular/core/testing';

import { LogingInterceptor } from './loging.interceptor';

describe('LogingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogingInterceptor = TestBed.inject(LogingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
