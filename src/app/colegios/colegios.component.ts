import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {

  colegios: string[] = ['Azarquiel','Infantes','Europa','El Greco'];

  constructor(private colegiosService: ColegiosService) { }

  ngOnInit(): void {
    this.colegiosService.lista();
  }

  agregarColegio(): void {
    this.colegios.push(`Colegio ${this.colegios.length + 1}`);
    //lo anterior es equivalente a lo siguiente:
    //this.colegios.push('Colegio ' + (this.colegios.length + 1));
    this.colegiosService.lista();
  }

  borrarColegio(): void {
    this.colegios.pop();
  }

}