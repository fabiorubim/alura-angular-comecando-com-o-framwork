import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor!: number;
  destino!: number;

  //ou
  //valor: number = 12;
  //destino: number = 222;

  transferir() {
    console.log('Solicitado nova transferência!');
    console.log('Valor: R$', this.valor);
    console.log('Destino: R$', this.destino);
  }
}
