import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 12; // Este valor já aparece no formulário por padrão.
  destino: number = 34; // Este valor já aparece no formulário por padrão.

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    console.log('Solicitada nova transferência.');

    const valorEmitir = { valor: this.valor, destino: this.destino }
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
