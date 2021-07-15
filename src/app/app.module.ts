import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { File1Component } from './file1/file1/file1.component';
import { SecondComponent } from './file1/second/second.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, File1Component, SecondComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
