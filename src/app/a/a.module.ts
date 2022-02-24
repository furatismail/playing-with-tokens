import { CommonModule } from '@angular/common';
import {
    InjectionToken,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { PRODUCT_ENDPOINT } from '../inj';
import { PService } from '../p.service';
import { AComponent } from './a.component';


@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [
      AComponent
    ],
    exports: [AComponent]
})
export class AModule {

    constructor() {
       
    }

    static register(config: string): ModuleWithProviders<AModule> {
        console.log(config)
        return {
            ngModule: AModule,
            providers: [
                PService,
                { provide: PRODUCT_ENDPOINT, useValue: config }
            ]
        };
    }
}
