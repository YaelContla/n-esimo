import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multiplo-tres',
  templateUrl: './multiplo-tres.component.html',
  styleUrls: ['./multiplo-tres.component.css']
})
export class MultiploTresComponent {

  @Input() inputB: number = 0;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  multiplosTres: number[] = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

  resultado: number = 0;

  multiTres(  valor: number ) {
    this.multiplosTres.findIndex((multi, i) => {

      this.inputB = valor;

      if (this.inputB <= 0) {
        this.inputB = 0;
      } else if (i === this.inputB) {
          this.resultado = multi;
          this.valorSalida.emit(this.resultado);
        }
        this.inputB = 0;
      });
  }

}
