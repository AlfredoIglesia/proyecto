import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambiaValor: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('inputNumber')
  inputNumber!: ElementRef;
  constructor() {
  }
  ngOnInit(): void {
  }
  controlarInput(event: number): void {
    console.log(this.inputNumber);
    if (event >= 100) {
      this.progreso = 100;
    } else if (event <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = event;
    }
    this.inputNumber.nativeElement.value = this.progreso;
    this.cambiaValor.emit( this.progreso);
  }
  cambiarValor(valor: number): void {
    if (this.progreso > 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.inputNumber.nativeElement.focus();
    this.cambiaValor.emit( this.progreso);
  }
}
