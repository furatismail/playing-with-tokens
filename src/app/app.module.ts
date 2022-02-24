import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AModule } from './a/a.module';

import { AppComponent } from './app.component';
import { BModule } from './b/b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AModule.register('hiff-pl'),
    BModule.register('hiff-kl')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
