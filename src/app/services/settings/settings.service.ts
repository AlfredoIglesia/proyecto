import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { link } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css'
  };
  constructor(@Inject(DOCUMENT) private document: any) {
    this.cargarAjustes();
  }

  public guardarAjustes(): void {
    //console.log('Guardando en ajustes');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  public cargarAjustes(): void {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes') || '{}');
      //console.log('Cargando datos');
      this.aplicarColor(this.ajustes.tema);
    } else {
      //console.log('Usando valores por defecto');
      this.aplicarColor(this.ajustes.tema);
    }
  }
  public aplicarColor(tema: string): void {
    const url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes {
    tema: string;
    temaUrl: string;
}
