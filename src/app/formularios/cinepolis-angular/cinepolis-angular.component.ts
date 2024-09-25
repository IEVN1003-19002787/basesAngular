import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-angular',
  templateUrl: './cinepolis-angular.component.html',
  styleUrl: './cinepolis-angular.component.css'
})
export class CinepolisAngularComponent {
  nombre: string = '';
  cantBoletos: number = 0;
  boletoxCom: number= 7;
  cantPersonas: number = 0;
  Cineco: boolean = false;
  total: number = 0;
  

  Calculo() {
    const maxBoletos = this.cantPersonas * this.boletoxCom;

    if (this.cantBoletos > maxBoletos) {
      alert('No puedes comprar mas de 7 boletos por personas, gracias');
      return;
    }    
    const costoBoleto = 12.000;
    let descuento = 0;
    if (this.cantBoletos >= 5 && this.cantBoletos <= 7) {
      descuento = 0.15;
    } else if (this.cantBoletos >= 3 && this.cantBoletos <= 4) {
      descuento = 0.10;
    }
    let total = this.cantBoletos * costoBoleto;
    total -= total * descuento;
    if (this.Cineco) {
      total -= total * 0.10;
    }
    this.total = total;
  }
}
