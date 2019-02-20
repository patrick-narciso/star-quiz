## Introdução
O desafio consiste em construir uma aplicação para fazer um quiz com os personagens da franquia star wars. O jogador tem 2 minutos para marcar o maior número de pontos. Caso peça dicas do personagem, é marcado 5 pontos, caso contrário marca-se 10 pontos. 


## Tecnologias Utilizadas

- HTML 5
- CSS 3
  - [Parallax Star](https://codepen.io/saransh/pen/BKJun)
- SASS
- Styled Components
- Javascript (ES6)
- [VUE.JS](https://vuejs.org/)
- [VUEX](https://vuex.vuejs.org/)
- [Amazon AWS S3](https://aws.amazon.com/pt/s3/)
- [Docker](https://www.docker.com/)
- API's
    - [SWAPI](https://swapi.co/) (API com os dados dos planetas)

## Execução do Projeto

### Yarn
Para execução deste projeto com Yarn, será necessário ter o [Node](https://nodejs.org),
então certifique-se que o tenha instalado localmente. Primeiramente clone este repositório.
Na pasta do projeto, execute o comando:
```
yarn install
```
Este comando irá instalar as dependências do projeto.
 
Logo após, execute o comando:
```
yarn serve
```
A aplição estará disponível no endereço 
```
http://localhost:8080
```

Em ambos os casos a aplicação estará disponível no endereço 
```
http://localhost:8080
```

## Testes
Foram feitos testes unitários com Jest.
Para executá-los, basta executar o seguinte comando:
```
yarn test:unit
```