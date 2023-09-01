#language:pt

  @balance @regressive
  Funcionalidade: Visualização de saldo
  - Eu como usuário devo poder visualizar meu saldo no aplicativo Nuclone.

    Contexto: 
      Dado que o usuario acesse o app

    Cenario: Visualização saldo no app
      Quando ele clicar no botão para ver o saldo
      Então ele vê o saldo "R$"