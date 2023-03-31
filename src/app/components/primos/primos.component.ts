import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent {

  @Input() inputA: number = 0;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  primos: number[] = [0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  resultado: number = 0;

   numPrimos( valor: number ) {
    this.primos.findIndex((primo, i) => {

      this.inputA = valor;

      if (this.inputA <= 0) {
        this.inputA = 0;
      } else if (i === this.inputA ) {
          this.resultado = primo;
          this.valorSalida.emit(this.resultado);
        }
        this.inputA = 0;
      }
    );
  }

 


}
