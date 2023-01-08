#language:pt

  @balance @regressive
  Funcionalidade: Saldo no aplicativo
  - Eu como usuário devo poder visualizar meu saldo

    Contexto: 
      Dado que o usuario acesse o app

      Cenario: Visualização de saldo
      Quando ele clicar no botão para ver o saldo
      Então ele vê o saldo "R$"