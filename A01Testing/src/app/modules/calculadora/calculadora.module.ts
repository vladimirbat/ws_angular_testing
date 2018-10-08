import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ CalculadoraComponent ],
  exports: [CalculadoraComponent]
})
export class CalculadoraModule
 { }
