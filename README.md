# Blue Hunter - Estamos contratando!


**Blue Hunter** é uma empresa fictícia cujas demandas de desenvolvimento de software têm aumentado muito nos últimos meses. Tentando manter-se sempre atualizada, busca novos desenvolvedores de software que sejam capazes de solucionar problemas de forma eficaz e elegante.

Como candidato, seu objetivo é desenvolver uma aplicação que seja capaz de demonstrar seus conhecimentos em desenvolvimento frontend, backend ou fullstack nas tecnologias adotadas pela organização.

Para isso será necessário criar uma aplicação que atenda os requsitos abaixo:

## Se você for um Dev Frontend

Construa uma aplicação SPA utilizando Angular 4, Less e TypeScript que atenda o seguinte:

- O usuário terá 1 tela de busca de clientes por nome.
- Ao digitar parte do nome e clicar o botão Buscar, a aplicação deve mostrar uma lista de clientes com todos os atributos existentes que foram encontrados no backend.
- Caso nenhum cliente satisfaça a query de busca, a aplicação deve mostrar uma mensagem solicitando que a string de busca seja melhorada.
- O endpoint de busca encontra-se em https://dummy-blue-hunter.mybluemix.net/user/by-name/{name-part} onde {name-part} é parte do nome a ser buscado.

***

- O usuário terá também 1 tela de busca de livros por título.
- Ao digitar parte do título e clicar o botão buscar, a aplicação deve mostrar uma lista de livros com todos os atributos existentes que foram encontrados no backend.
- Caso nenhum livro satisfaça a query de busca, a aplicação deve mostrar uma mensagem solicitando que a string de busca seja melhorada.
- O endpoint de busca encontra-se em https://dummy-blue-hunter.mybluemix.net/book/by-title/{title-part} onde {title-part} é parte do título a ser buscado.

## Se você for um Dev Backend

Construa uma aplicação NodeJs com JavScript ou TypeScript que tenha 2 endpoints com o mesmo comportamento dos endpoints abaixo:

- https://dummy-blue-hunter.mybluemix.net/user/by-name/{name-part} onde {name-part} é parte do nome a ser buscado. 
- https://dummy-blue-hunter.mybluemix.net/book/by-title/{title-part} onde {title-part} é parte do título a ser buscado.

Implemente um terceiro endpoint que retorne livros por autor e que tenha a seguinte assinatura:

- /book/by-author/{author-part}

A aplicação deve persistir os dados em banco de dados relacional ou No-Sql.

Caso opte por banco relacional, inclua os scripts de criação dos objetos (database, tabelas, sequences, etc) no projeto. Caso opte por No-Sql, inclua as instruções para o setup do banco No-Sql.

## Se você for um Dev Fullstack
- Execute as tarefas acima tanto de front como de back. 
- Inclua uma terceira tela para busca de livros por autor ou adapte a tela de busca por nome dando a opção de busca por autor.
- O aplicativo frontend deve utilizar o backend criado e não o disponibilizado.

## Requisitos técnicos
- Instruções para build, deploy e execução.
- Pequeno memorando com justificativa de decisões técnicas.

## Como destacar-se?
- Escrever testes unitários com boa cobertura.
- Fazer o deploy da aplicação no seu ambiente de nuvem preferido ([IBM Bluemix](https://console.ng.bluemix.net/), AWS, Openshift, Heroku).
- Seguir os [12 fatores](https://12factor.net/)

## Como enviar o código para análise?
O desenvolvedor deve criar um projeto no seu Git repo preferido (GitHub, BitBucket, etc). **Não serão aceitos merge requests para este repo aqui!** 

Lembre-se que seu código será analisado por desenvolvedores, então não economize nos comentários de commit.

### Sucesso!
Dúvidas: Entrar em contato no email marciopg arroba br.ibm.com

