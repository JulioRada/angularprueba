import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxTrimModule } from 'ngx-trim';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    NgxTrimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
