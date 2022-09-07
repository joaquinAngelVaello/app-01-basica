import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent {

  //colegios: string[] = ['Azarquiel','Infantes','Europa','El Greco'];
  colegios: string[] = [];

  constructor(private colegiosService: ColegiosService) {
    this.cargarColegios();      
  }

  cargarColegios() {
    this.colegios = this.colegiosService.getColegios();
  }

  agregarColegio(): void {
    this.colegiosService.agregarColegio();
    this.cargarColegios();
    //console.log('Agregar colegio');
    //this.colegios.push(`Colegio ${this.colegios.length + 1}`);
    //lo anterior es equivalente a lo siguiente:
    //this.colegios.push('Colegio ' + (this.colegios.length + 1));
    //this.colegiosService.lista();
  }

  borrarColegio(): void {
    this.colegiosService.borrarColegio();
    this.cargarColegios();
    //this.cargarColegios();
    //console.log('Borrar colegio');
    //this.colegios.pop();
  }

}