import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html'
})
export class DistanciaComponent {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number = 0;

  calcular(): void {
   
    let distanciaX = Math.pow((this.x2 - this.x1), 2);
    let distanciaY = Math.pow((this.y2 - this.y1), 2);
    
    
    this.resultado = Math.sqrt(distanciaX + distanciaY);
  }
}