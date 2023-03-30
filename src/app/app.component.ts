import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'n-ésimo';

  inputA: number = 0;
  inputB: number = 0;

  resultado: number = 0;


  numPrimos(primos: number[] = [0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]) {

    primos.findIndex((primo, i) => {
      if (this.inputA <= 0) {

        this.inputA = 0;

      } else {

        if (i === this.inputA) {
          this.resultado = primo;
          console.log(this.resultado)
        }
      }
    });

    // this.inputA = 0;

    // primos.forEach( (primo, i) => {
    //   if (i === this.inputA) {
    //     this.resultado = primo;
    //     console.log(`${primo}`);
    //   }
    // });
  }

  multiTres(multiTres: number[] = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]) {

    multiTres.findIndex((multi, i) => {

      if (this.inputB <= 0) {

        this.inputB = 0;

      } else {

        if (i === this.inputB) {
          this.resultado = multi;
          // this.inputB = 0;
        }
        
      }
      
    });
  }
}




