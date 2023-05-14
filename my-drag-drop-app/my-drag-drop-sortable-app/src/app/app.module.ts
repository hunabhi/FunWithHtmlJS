import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AppComponentTwoComponent } from './app-component-two/app-component-two.component';

@NgModule({
  declarations: [
    AppComponent,AppComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
