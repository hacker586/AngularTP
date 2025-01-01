import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule // Add CommonModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }