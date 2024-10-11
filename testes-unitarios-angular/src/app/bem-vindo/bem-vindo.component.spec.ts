import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BemVindoComponent } from './bem-vindo.component';

describe('BemVindoComponent', () => {
  let component: BemVindoComponent; // declaracao da variavel para o componente
  let fixture: ComponentFixture<BemVindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BemVindoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BemVindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

// teste que verifica se o componente foi criado corretamente

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy(); // verifica se o componente foi criado com sucesso
  });


// teste que verifica se a mensagem esta sendo exibida corretamente
it('Deve exibir a mensagem de boas vindas', () =>{
  const elementoCompilado = fixture.nativeElement as HTMLElement; // referencia ao elemento html compilado
  expect(elementoCompilado.querySelector('h1')?.textContent).toContain('Bem vindo ao teste de Angular');
});


// Novo teste para verificar se a mensagem é atualizada corretamente
it('deve atualizar a mensagem ao clicar no botão', () => {
  component.atualizarMensagem('Você mudou a mensagem!'); // Chama o método para atualizar a mensagem
  expect(component.mensagem).toBe('Você mudou a mensagem!'); // Verifica se a mensagem foi atualizada corretamente
});



});
