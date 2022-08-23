npm start

###Challenge
---Requisitos
RF001 - Permitir acesso ao sistema através de link de uso único.
RF002 - Cadastrar usuário.
RF003 - Editar usuário.
RF004 - Excluir usuário.

---Regras de negócio
RN001 - O Link de acesso deve ser invalidado após 01 acesso.
RN002 - O acesso a conta do usuário é feito através do link gerado no momento do
cadastro e deve ser invalidado e substituído por outro a cada login.
RN003 - O programa deve informar que o novo link deve ser guardado pelo usuário para
permitir acessar o sistema novamente.
RN004 - O cadastro do usuário deve conter um email único e o nome completo com pelo
menos duas palavras.
RN005 - Só é permitido editar usuário através do link de uso único.
RN006 - Só é permitido excluir usuário através do link de uso único.

###Orientações
---Front-end
ReactJS, ES6, SASS, CSS, CSS module, etc.