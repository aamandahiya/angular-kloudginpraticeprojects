import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {FullstackdevelopComponent} from './fullstackdevelop/fullstackdevelop.component'
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
 
  declarations: [ AppComponent, HelloComponent , FullstackdevelopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
