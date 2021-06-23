# JumpStart - Math

## Contexto

Aplicativo desenvolvido para a disciplina de Desenvolvimento Web 2 da [Universidade Tecnológica Federal do Paraná - CP](http://portal.utfpr.edu.br/campus/cornelioprocopio) (UTFPR). O projeto visa criar uma ferramenta educacional para que alunos do ensino fundamental possam trabalhar conceitos de matemática por meio de atividades que são geradas e corrigidas dinamicamente pela aplicação.

Neste repositório se encontram a *api* e o *client* do projeto. Para serem executados é necessário ter o [Node](https://nodejs.org/pt-br/about/) (baixe o instalador [aqui](https://nodejs.org/pt-br/about/)) e gerenciador de pacotes [Yarn](https://yarnpkg.com/getting-started/install).

Ao instalar o node, basta rodar a seguinte linha de comando para instalar o Yarn:

```
npm install -g yarn
```

## Instalação
* ### Clonando o repositório:
Para baixar o repositório no seu computador, execute o seguinte comando no diretório de sua preferência:

```
git clone https://github.com/pedrorubinger/jump-start-math.git
```

* ### Executando a API:
Depois de ter clonado o repositório, entre no diretório */jump-start-math-api* e execute esta linha de código no terminal, ela baixará as bibliotecas necessárias para a execução da *api*:

```
yarn install
```

Em seguida, crie um arquivo .env (tome como base para os parâmetros o arquivo */.env.example*) com as configurações do seu banco de dados para poder realizar a conexão com a aplicação. Para receber emails da página de contato, é necessário inserir também no mesmo arquivo as credenciais da sua conta de email. Feito isso, execute a aplicação através do comando:

```
yarn start
```

* ### Executando o cliente:
Para executar o cliente, entre no diretório */jump-start-math-front* e execute esta linha de código no terminal, ela baixará as bibliotecas necessárias para a execução do cliente:

```
yarn install
```

Para executar, o comando é:

```
yarn start
```
