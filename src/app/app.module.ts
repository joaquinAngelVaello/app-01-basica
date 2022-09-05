import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { TutoresComponent } from './tutores/tutores.component';
import { DireccionComponent } from './direccion/direccion.component';
import { HorariosComponent } from './horarios/horarios.component';
import { FaltasComponent } from './faltas/faltas.component';
import { NotasComponent } from './notas/notas.component';

@NgModule({
  declarations: [
    AppComponent,
    ColegiosComponent,
    AlumnosComponent,
    TutoresComponent,
    DireccionComponent,
    HorariosComponent,
    FaltasComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
