import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 12; // Este valor já aparece no formulário por padrão.
  destino: number = 34; // Este valor já aparece no formulário por padrão.

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Solicitada nova transferência.');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicionar(valorEmitir)
      .subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
      },
      error => console.error(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
