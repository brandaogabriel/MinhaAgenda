# 📖 MinhaAgenda
Agenda desenvolvida durante o [curso](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado) de JavaScript na udemy.

 - Frontend: JavaScript
 - Backend: NodeJS

## Principais bibliotecas utilizadas:
1. express
2. bcryptjs
3. mongoose
4. helmet
5. csurf
6. ejs
7. dontenv
8. validator

## Exemplo de execução:
- É necessário ter uma conta no [MongoDB](https://www.mongodb.com/).
- Deve-se criar um arquivo ".env" na raiz do projeto.
- Após criado o arquivo, copie e cole no arquivo:
   > CONNECTIONSTRING=mongodb+srv://**nomedoUsuario**:**password**@cursojs1.3onna.mongodb.net/**nomeDoSeuBancoDeDados**?retryWrites=true&w=majority
- Substitua o **nomedoUsuario**, **password** e **nomeDoSeuBancoDeDados** pelo usuário o qual você criou no mongoDB (O nome do banco de dados será o que você definir em **nomeDoSeuBancoDeDados**).
- Feito os passos acima, execute **npm i** para instalar as dependências.
- Ao final, execute **npm start** para inicializar a aplicação. Por padrão a aplicação será executada na porta 3000.

## Algumas imagens da aplicação:
### Lista de contatos
![Contatos](./img/contatos.png)

### Criar conta / Entrar no sistema
![Contatos](./img/loginlogout.png)

### Entrar no sistema
![Contatos](./img/loginsuccess.png)

### Cadastrar um contato
![Contatos](./img/cadastroContato.png)