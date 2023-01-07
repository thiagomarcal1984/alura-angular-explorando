import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 12; // Este valor já aparece no formulário por padrão.
  destino: number = 34; // Este valor já aparece no formulário por padrão.

  transferir() {
    console.log('Solicitada nova transferência.');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
