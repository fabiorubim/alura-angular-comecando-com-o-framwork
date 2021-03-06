import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  // destino: number = 0;
  // valor: number = 0;
  transferencias: any[] = [];

  transferir($event: any){
    console.log($event);
    // this.destino = $event.destino;
    // this.valor = $event.valor;
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
}
