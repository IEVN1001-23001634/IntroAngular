import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html'
})
export class AreasComponent {
  v1: number = 0; 
  v2: number = 0; 
  figura: string = 'cuadrado'; 
  resultado: number = 0;

  calcular(): void {
    if (this.figura === 'cuadrado') {
      this.resultado = this.v1 * this.v1; 
    } 
    if (this.figura === 'circulo') {
      this.resultado = 3.1416 * (this.v1 * this.v1); 
    } 
     if (this.figura === 'rectangulo') {
      this.resultado = this.v1 * this.v2; 
    }
    if (this.figura === 'pentagono') {
      this.resultado = (5 * this.v1 * this.v2) / 2; 
    }
  }
}