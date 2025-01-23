import { Component } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-imccalculator',
  imports: [FormsModule,CommonModule],
  templateUrl: './imccalculator.component.html',
  styleUrl: './imccalculator.component.scss',
  

})
export class IMCCALCULATORComponent {



  peso : number=0.0;
  altura : number=0.0;

  IMC :number | null = null;
  estadoIMC : string = "";
  emojiUrl: string = '';

  calcularIMC(): void {
    if (this.peso && this.altura) {
      this.IMC = this.peso / (this.altura * this.altura);
      this.estadoIMC = this.obtenerEstadoIMC(this.IMC);
      this.emojiUrl = this.obtenerEmoji(this.estadoIMC);
    }
  }

  obtenerEstadoIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  }

  obtenerEmoji(estado: string): string {
    switch (estado) {
      case 'Bajo peso':
        return 'asombro.svg';
      case 'Normal':
        return 'carafelix.svg';
      case 'Sobrepeso':
        return 'desepccion.svg';
      case 'Obesidad':
        return 'triste.svg';
      default:
        return '';
    }
  }

}
