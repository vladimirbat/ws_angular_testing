import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MantenimientoComponent } from './mantenimiento.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ MantenimientoComponent ],
  exports: [MantenimientoComponent]
})
export class MantenimientoModule { }
