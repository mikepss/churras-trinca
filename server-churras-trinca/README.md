## Rotas da API:

> POST /sessions

*Faz a autenticação do sistema (e-mail e senha) utilizando Bearer Token*

#### As rotas abaixo só funcionam enviando o token de autenticação no cabeçalho.

> GET /appointments

*Busca todos os eventos cadastrados*

> POST /appointments

*Realiza o cadastro de um novo evento*

> POST /users

*Realiza o cadastro de um usuário*

#### Para inicializar o servidor basta rodar os comandos:

Para carregar as dependencias:

>yarn

Para inicializar o servidor:

>yarn dev:server
