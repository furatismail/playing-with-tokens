import { CommonModule } from '@angular/common';
import {
    InjectionToken,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { PRODUCT_ENDPOINT } from '../inj';
import { PService } from '../p.service';
import { BComponent } from './b.component';


@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [
      BComponent
    ],
    exports: [BComponent]
})
export class BModule {

    constructor() {
       
    }

    static register(config: string): ModuleWithProviders<BModule> {
        console.log(config)
        return {
            ngModule: BModule,
            providers: [
                PService,
                { provide: PRODUCT_ENDPOINT, useValue: config }
            ]
        };
    }
}
