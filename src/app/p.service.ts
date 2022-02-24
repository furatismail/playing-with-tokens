import { Inject, Injectable } from '@angular/core';
import { PRODUCT_ENDPOINT} from './inj';

@Injectable()
export class PService {
  constructor(@Inject(PRODUCT_ENDPOINT) private inj: string) {
    console.log(this.inj)
  }

  c() {
    console.log(this.inj)
  }
}
