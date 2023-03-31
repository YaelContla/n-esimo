import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'n-ésimo';

  inputA: number = 0;
  inputB: number = 0;


  resultado: number = 0;
  posicion: number = 0;  


  cambioValorHijo(valor: number) {
    console.log('Cambio!!!', valor);
    this.resultado = valor;
  }

}
