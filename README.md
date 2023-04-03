## Teste técnico: Consumo da API do Rick and Morty

### Objetivo do desenvolvimento:

Tem-se por objetivo no desenvolvimento desta aplicação consumir a API ([https://rickandmortyapi.com/documentation/](https://rickandmortyapi.com/documentation/)) do desenho animado Rick and Morty e exibir em tela os seus personagens juntamente com informações detalhadas de cada um, além disso, desenvolver um layout responsivo.

##

### Detalhes do desenvolvimento do projeto:

Antes de iniciar o desenvolvimento de fato, após entender claramente a proposta do teste, criei um roadmap para evoluir as implementações de forma organizada e planjeada.
Tendo também como princípio três pilares, UI, UX e Código. Como base para proporcionar interfaces interativas e agradáveis para o usuário, experiência intuitiva e performática na utilização do sistema, e é claro, um código bem construído, de forma clean e legível para facilitar o entendimento de qualquer programador que for dar manutenção em algum momento.

Aprofundando um pouco a parte técnica, para o consumo da API utilizei o Axios. Não esquecendo de tratar possíveis erros de requisições evitando gerar experiência negativa ao usuário. Apliquei uma arquiterura organizada conforme a convenção recomenda e componentizando todos os componentes que possam ser reutilizados em outros pontos do sistema, dessa forma, além de ser possível reutilizá-los tornam os códigos implementados mais otimizados e organizados para futuras manutenções. Um detalhe importante para o bom funcionamento do sistema e também aplicando uma boa prática na manipulação de estados globais, utilizei o contextApi para fazer o gerenciamento dos mesmos. Para finalizar, também defini fontes e cores globais que auxiliam e proporcionam um desenvolvimento veloz e garante que os estilos utilizados estão seguindo o padrão pré-definido.

##

### Funcionalidades desenvolvidas:

- Na Página principal exibe uma lista paginada com todos os personagens, são exibidos a cada 20 e é possível trocar a página para visualizar os seguintes;
- Cards que exibem a foto do personagem para que o usuário possa identificá-los e abaixo o seu respectivo nome;
- Modal para ver mais detalhes de cada personagem, ao clicar em um card o modal é aberto, no seu conteúdo é possível visualizar informações do personagem e também favoritar o mesmo, ao realizar esta ação o personagem é adicionado em uma listagem de favoritos;
- Listagem de favoritos para exibir os personagens que o usuário adicionou como favorito;
- Input para buscar um personagem específico na listagem total dos personagens;
- Filtros selecionáveis pelas seguintes classes: Status, Gênero e Espécies. Cada classe possui suas opções conforme as possibilidades presentes na API;
- Layout responsivo.

##

### Tecnologias utilizadas no desenvolvimento:

- ReactJS
- Typescript
- JavaScript
- HTML
- CSS (Styled Components)
- ContextAPI
- Axios

##

### Para executar o projeto:

```bash
# Clonar o repositório:
$ git clone https://github.com/cesarvargasjr/technical_test_rick_and_morty.git
```

```bash
# Acessar a pasta do projeto via terminal:
$ cd technical-test-green-acesso
```

```bash
# Instale as dependências:
$ npm i
```

```bash
# Execute a aplicação:
$ npm start
```

Executados os comandos abra em seu browser o endereço [http://localhost:3000](http://localhost:3000) para utilizar o sistema.

##

### Screenshot:

### Versão Desktop:

Página principal:

Lista de favoritos:

Modal:

### Versão Mobile:

Página principal:

Lista de favoritos:

Modal:
