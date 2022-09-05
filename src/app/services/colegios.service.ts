import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  constructor() { 
    console.log('Iniciando el servicio de Colegios');
  }

  lista(){
    console.log('Traigo la lista de colegios');
  }
}
