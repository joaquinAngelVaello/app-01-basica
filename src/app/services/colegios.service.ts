import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  colegios: string[] = ['Azarquiel','Infantes','Europa','El Greco'];

  constructor() { 
    console.log('Iniciando el servicio de Colegios');
  }

  getColegios(): string[]{    
    // return this.colegios;
    // romper la referencia al array.
    return [...this.colegios];
  }

  agregarColegio(){
    this.colegios.push(`Colegio número: ${this.colegios.length + 1}`);
  }

  borrarColegio(){
    this.colegios.shift();
  }

}
