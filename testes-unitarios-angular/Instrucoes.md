## Testes Unitários em Angular

Este guia fornece instruções passo a passo para criar testes unitários em um projeto Angular simples.

### Passo 1: Criar um Novo Projeto Angular

Abra o terminal e execute:

```
ng new testes-unitarios-angular
```

Quando solicitado:

- Estilo do projeto: CSS
- Server-side redering: Não

### Passo 2: Executar os Testes Básicos
Navegue para o diretório do projeto e execute:

```
ng test
```

### Passo 3: Criar um Componente Simples
Crie um componente chamado ``bem-vindo:```

```
ng generate component bem-vindo
```

### Passo 4: Adicionar uma Mensagem no Componente

Abra o arquivo ``bem-vindo.component.ts`` e adicione o seguinte código:
```
import { Component } from '@angular/core';

// Este componente está sendo definido em modo standalone, ou seja, não depende de um módulo externo.
@Component({
  selector: 'app-bem-vindo', // Nome que será usado para referenciar este componente no HTML
  templateUrl: './bem-vindo.component.html', // Caminho para o arquivo de template HTML do componente
  standalone: true, // Definindo o componente como standalone
})
export class BemVindoComponent {
  // Esta variável armazena a mensagem que será exibida no HTML
  mensagem: string = 'Bem-vindo ao teste de Angular!';
}
```

**Atualizar** ``bem-vindo.component.html`` 
Abra o arquivo ``bem-vindo.component.html`` e adicione o seguinte código:

```
<!-- Exibe a mensagem armazenada na variável 'mensagem' no HTML -->
<h1>{{ mensagem }}</h1>
```

**Apontar o arquivo** ``bem-vindo.component.html`` para o arquivo ``app.component.html``

- abra o arquivo ``app.component.html`` apague todo o conteudo e coloque o codigo abaixo:

```
 <!-- Estamos apontando aqui o conteudo do arquivo bem-vindo.component.html -->
 <!-- Esse nome pegamos no selector no aquivo bem-vindo.componet.ts -->

<app-bem-vindo></app-bem-vindo>
```

Confirme no arquivo ``app.component.ts`` se o arquivo foi importado:

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BemVindoComponent } from "./bem-vindo/bem-vindo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BemVindoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testes-unitarios-angular';
}

```

### Passo 5: Criar o Teste Unitário Básico
Atualizar ``bem-vindo.component.spec.ts``
Abra o arquivo ``bem-vindo.component.spec.ts`` e adicione o seguinte código:

```
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BemVindoComponent } from './bem-vindo.component';

describe('BemVindoComponent', () => {
  let component: BemVindoComponent; // Declaração da variável para o componente
  let fixture: ComponentFixture<BemVindoComponent>; // Controle do estado do componente durante o teste

  beforeEach(async () => {
    // Criação de um ambiente de teste para o componente standalone
    await TestBed.configureTestingModule({
      imports: [BemVindoComponent] // Importando o componente para o teste
    }).compileComponents();

    fixture = TestBed.createComponent(BemVindoComponent); // Cria a instância do componente para o teste
    component = fixture.componentInstance; // Atribui o componente à variável 'component'
    fixture.detectChanges(); // Detecta mudanças no estado do componente
  });

  // Teste que verifica se o componente foi criado corretamente
  it('deve criar o componente', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado com sucesso
  });

  // Teste que verifica se a mensagem está sendo exibida corretamente
  it('deve exibir a mensagem de boas-vindas', () => {
    const elementoCompilado = fixture.nativeElement as HTMLElement; // Referência ao elemento HTML compilado
    expect(elementoCompilado.querySelector('h1')?.textContent).toContain('Bem-vindo ao teste de Angular!');
  });
});

```
### Passo 6: Adicionar uma Nova Funcionalidade
Atualizar ``bem-vindo.component.ts``
Abra o arquivo ``bem-vindo.component.ts`` e adicione um método que permite alterar a mensagem de boas-vindas:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-bem-vindo', // Nome que será usado para referenciar este componente no HTML
  templateUrl: './bem-vindo.component.html', // Caminho para o arquivo de template HTML do componente
  standalone: true, // Definindo o componente como standalone
})
export class BemVindoComponent {
  // Esta variável armazena a mensagem que será exibida no HTML
  mensagem: string = 'Bem-vindo ao teste de Angular!';

  // Método para atualizar a mensagem de boas-vindas
  atualizarMensagem(novaMensagem: string) {
    this.mensagem = novaMensagem; // Atualiza a mensagem com o novo valor
  }
}

```

**Atualizar** ``bem-vindo.component.html``
Abra o arquivo ``bem-vindo.component.html`` e adicione um botão para atualizar a mensagem:

```
<!-- Exibe a mensagem armazenada na variável 'mensagem' no HTML -->
<h1>{{ mensagem }}</h1>

<!-- Botão para atualizar a mensagem -->
<button (click)="atualizarMensagem('Você mudou a mensagem!')">Mudar Mensagem</button>

```

#### Executar Testes e Servidor Simultaneamente
**Abrir Dois Terminais**
**Terminal 1:** Inicie o servidor: ``ng s``

**Terminal 2:** Execute os testes: ``ng test``
