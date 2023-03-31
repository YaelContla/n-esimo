import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimosComponent } from './components/primos/primos.component';
import { MultiploTresComponent } from './components/multiplo-tres/multiplo-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrimosComponent,
    MultiploTresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
