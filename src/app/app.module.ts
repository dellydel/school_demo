import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { UniqueValidatorDirective } from './shared/unique.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, routableComponents, UniqueValidatorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

