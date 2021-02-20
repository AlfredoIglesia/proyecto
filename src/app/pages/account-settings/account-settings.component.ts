import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private ajustes: SettingsService ) {
    //this.colocarCheck();
  }

  ngOnInit(): void {
    this.colocarCheck();
  }

  public cambiaColor(tema: string, link: any): void {

    this.ajustes.aplicarColor(tema);
    this.cambiarCheck(link);

  }

  public cambiarCheck(link: any): void {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  public colocarCheck(): void {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.ajustes.ajustes.tema;
    for (const ref of selectores) {
      console.log('ref.getAttribute(data-theme)' + ref.getAttribute('data-theme'));
      console.log('this.ajustes.ajustes.tema' + this.ajustes.ajustes.tema);
      if (ref.getAttribute('data-theme') === tema) {
        console.log('dentro del tema');
        ref.classList.add('working');
        break;
      }
    }
  }
}
