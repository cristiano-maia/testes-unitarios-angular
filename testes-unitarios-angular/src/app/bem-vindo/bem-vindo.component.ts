import { Component } from '@angular/core';


// Este componente esta definido em modulo standalone, ou seja, não depende de um modelo externo
@Component({
  selector: 'app-bem-vindo', // nome para referenciar esse componente no html
  standalone: true,
  imports: [],
  templateUrl: './bem-vindo.component.html',
  styleUrl: './bem-vindo.component.css'
})
export class BemVindoComponent {

  mensagem:string = 'Bem vindo ao teste de Angular'


  // Método para atualizar a mensagem de boas-vindas
  atualizarMensagem(novaMensagem: string) {
    this.mensagem = novaMensagem; // Atualiza a mensagem com o novo valor
  }

}
