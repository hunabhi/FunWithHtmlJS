import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AppComponentTwoComponent } from './app-component-two/app-component-two.component';
import { CdkDragDropSortingExample } from './cdk-drag-drop-sorting-example/cdk-drag-drop-sorting-example';

@NgModule({
  declarations: [
    AppComponent,AppComponentTwoComponent, CdkDragDropSortingExample
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
