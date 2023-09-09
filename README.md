# Appium-Codeceptjs-Nuclone

Este repositório contém um exemplo de projeto de automação de teste usando Appium e CodeceptJS para clonar a interface de usuário do aplicativo Nuclon.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em seu sistema:

- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Appium](http://appium.io/) (servidor de automação para aplicativos móveis)
- [Android Studio](https://developer.android.com/studio) (para configuração de emulador Android) ou um dispositivo Android físico conectado
- [CodeceptJS](https://codecept.io/) (framework de automação de teste)

## Configuração

1. Clone este repositório em seu sistema local:

   ```shell
   git clone https://github.com/juliosantosjob/Appium-Codeceptjs-Nuclone.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd Appium-Codeceptjs-Nuclone
   ```

3. Instale as dependências do projeto:

   ```shell
   npm install
   ```

4. Com o Nodejs instalado em sua maquina instale o appium server com o comando:

   ```shell
   npm install -g appium
   ```

   para verificar que o appium foi instalado com sucesso rode o comando: 

   ```shell
   appium --version
   ```
   assim ele irá retornar a versão latest do appium instalado em sua maquina, e por fim para rodar os testes você devera deixar o appium server de pé durante a execução, para inicia-lo basta rodar o comando:

   ```shell
   appium
   ```

5. Baixe e instale o Android Studio para conseguir emular o device onde os testes serão executados, caso não saiba como fazer siga este  [turorial](https://react-native.rocketseat.dev/android/emulador/).

6. Crie um arquivo '.env' na raiz do projeto onde você deverá informar onde quer rodar os testes, pode seguir o arquivo base .env.example

7. Baixe o app nuclone [aqui.](https://github.com/papitorcks/nuclone-appium-robot/tree/master), depois crie a pasta 'app' no diretorio raiz do projeto, adicione o apk baixado nesta pasta.


## Executando Testes

Você pode executar os testes usando o seguinte comando:

   ```shell
   npm run test
   ```

## Relatório de Testes

O relatório de testes inclui informações detalhadas sobre os testes realizados neste projeto.
<br>Para acessar o relatório da ultima execução acesse o [Link.](https://juliosantosjob.github.io/Appium-Codeceptjs-Nuclone).

## Contato
Para obter mais informações sobre este projeto, entre em contato comigo pelo email a baixo Tmj. 😉


Nome: Julio Santos
<br>
E-mail: julio958214@gmail.com

 ##
 ###
<div>
 
 [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/julio-santos-43428019b)
[<img src = "https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white">](https://www.instagram.com/juli0sts/)
[<img src = "https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white">](https://www.facebook.com/profile.php?id=100003793058455)
<a href="mailto:julio958214@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
  </a>