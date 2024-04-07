# Especificações do Projeto

Geramos personas fictícias com histórias que ilustram os problemas mais relevantes do projeto. As personas foram criadas com base no conhecimento da equipe e em casos comuns.

## Personas

| ![istockphoto-1357880802-612x612](https://github.com/ICEI-PUC-Minas-PMV-ADS/temp-e4-proj/assets/115122394/9d3e9199-d686-461c-b5b7-82a89736f811) | Natália Dias <br><br>  38 anos                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Ocupação                                                                                                                 | Bancária                       |
| Motivações                                                                                                               | Deseja ter uma rotina de treinos dinâmica para conseguir se manter motiviada, pois está bastante preocupada com sua saúde física e mental           |
| Frustrações                                                                                                             | Não se sente motivada com os treinos muito repetitivos e não tem paciência de revezar aparelhos na academia.                                                                            |
| História                                                                                                             | Natália tem se sentido muito pressionada no trabalho e foi aconselhada a praticar exercícios físicos para obter uma melhora na sua sáude, tanto física quanto mental, mas não tem costume de frequentar academia e ainda não se sente muito envolvida a ponto de conseguir manter uma rotina diária de treinos. |

<br><br>

| ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/temp-e4-proj/assets/115122394/be3dc461-2ab2-49c9-916e-9771db2f6ebf) | Wallace de Castro <br><br>  64 anos                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Ocupação                                                                                                                 | Aposentado                    |
| Motivações                                                                                                               | Deseja criar uma rotina diária de exercícios físicos, pois foi indicado pelo seu médico para conseguir envelhecer com saúde e autonomia.           |
| Frustrações                                                                                                             | Por não ter praticado musculação anteriormente, se sente perdido na execução de alguns exercícios e tem certa dificuldade de guardar quais exercícios realizou durante os dias da semana. |
| História                                                                                                             | Após se aposentar, Wallace tem tido algumas dificuldades em realizar tarefas simples do dia a dia e em consulta com um médico, este o aconselhou a prática de musculação para que consiga retomar sua autonomia funcional e envelhecer com mais qualidade de vida. |

<br><br>

| ![5b8ef4f40fe44](https://github.com/ICEI-PUC-Minas-PMV-ADS/temp-e4-proj/assets/115122394/374eec39-9e31-4efd-89bd-2935a78f5b3f) | Bruna Guimarães <br><br>  33 anos                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Ocupação                                                                                                                 | Personal Trainer              |
| Motivações                                                                                                               | Deseja descobrir uma aplicação que a permita montar treinos para seus alunos e realizar o acompanhamentos destes de forma online.           |
| Frustrações                                                                                                             | Lamenta ainda não ter encontrado uma aplicação que a permita realizar um bom acompanhamento dos treinos e evolução dos seus alunos de musculação. |
| História                                                                                                             | Após a pandemia, Bruna passou a realizar muitos atendimentos de maneira online, mas ainda não conseguiu encontrar uma aplicação que lhe permita acompanhar seus alunos da forma que ela gostaria. |

<br><br>

| ![download](https://github.com/ICEI-PUC-Minas-PMV-ADS/temp-e4-proj/assets/115122394/f8134e74-d66d-49c9-b05e-125c4c0e9f56) | Adriano Souza <br><br>  42 anos                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Ocupação                                                                                                                 | Engenheiro Civil              |
| Motivações                                                                                                               | Gosta muito de treinar musculação, já tem uma grande experiência pois já pratica há mais de 15 anos.           |
| Frustrações                                                                                                             | Devido à sua vasta experiência com musculação, sabe variar alguns exercícios quando necessita de ir à academia em horários de pico, mas tem dificuldade em lembrar quais exercícios executou e às vezes acaba demorando demais para lembrar de algum exercício de substituição. |
| História                                                                                                             | Como possui um vasto repertório de musculação, devido aos vários anos de treino, consegue substituir alguns exercícios quando o aparelho que deseja utilizar está ocupado, principalmente em momentos de academia muito cheia, mas nem sempre consegue fazer essa troca facilmente. Neste caso, nossa aplicação facilitaria esse tipo de substituição, tornando seu treino mais eficiente, além de poder deixar os exercícios realizados salvos para consultas futuras. |


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Natália Dias |  quero manter uma rotina de treinos dinâmica         | conseguir se manter motivada para os treinos         |
|Natália Dias | quero opções de substituição de exercícios para não precisar revezar| conseguir completar o treino sem ultrapassar seu tempo limite |
|Wallace de Castro | quero ter uma aplicação para me ajudar a lembrar da execução de determinado exercício | poder ter fácil auxílio na dúvida da execução de algum exercício |
|Wallace de Castro|quero poder salvar meu histórico de treinos para não me perder durante a semana| conseguir ter salvo o histórico de treinos realizados|
|Bruna Guimarães| quero uma aplicação para ajudar no atendimento dos alunos online| conseguir acompanhar os alunos de forma digital e eficiente|
|Bruna Guimarães| quero uam aplicação que me auxilie na montagem de treinos e auxilie os alunos na execução dos exercícios |conseguir realizar um atendimento completo e eficiente|
|Adriano Souza|quero poder registrar um histórico com minhas rotinas de treinos| conseguir ter salvo o histórico de treinos realizados |
|Adriano Souza|quero conseguir facilmente encontrar exercícios que possam substituir algum exercício que o aparelho esteja ocupado no momento |conseguir verificar exercícios de determinado grupo muscular para realizar alguma troca necessária de exercício|
|Renan Oliveira|consultar os relatórios com as demandas| para consultar o estoque de materiais|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Um aplicativo facilitador de rotina numa academia é extremamente útil por várias razões:

**Facilidade de Acesso:** 
- fácil acesso a uma variedade de rotinas de treinamento. Isso é conveniente para os usuários, pois podem acessar o aplicativo qualquer momento, em qualquer lugar, sem precisar carregar papel ou lembrar-se de sequências complexas de exercícios.

 **Planejamento e Organização:** 
 - Uma lista de exercícios em um aplicativo permite que os usuários planejem e organizem suas rotinas de treinamento de acordo com seus objetivos específicos e disponibilidade de tempo.
 - Também podendo criar listas personalizadas com base em seus interesses e  nível de condicionamento.

 **Acompanhamento de Progresso:**
 - Os usuários podem acompanhar facilmente seu progresso ao longo do tempo. Eles podem acessar o histórico diário, registrar o número de repetições e séries realizadas. Isso ajuda na motivação e na manutenção da consistência no treinamento.

 **Guiamento e Instrução:** 
 - Instruções detalhadas e demonstrações em vídeo para cada exercício. Isso é especialmente útil para iniciantes ou para aqueles que desejam aprender novos movimentos de forma correta e segura.
 
**Adaptação às Necessidades Individuais:** 
- Com um aplicativo que organiza exercícios, os usuários podem adaptar facilmente suas rotinas de treinamento às suas necessidades individuais, seja para focar em áreas específicas do corpo, melhorar a resistência cardiovascular ou trabalhar em objetivos de condicionamento físico específicos.


### Descrição Geral da Proposta
O sistema tem como foco oferecer a pessoas com o intuito de realziar atividade física uma maneira intuitiva e automatizada de organizarem seus exercícios, facilitando a sua rotina diária.

![Diagrama trabalho](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/assets/113618051/0f85f225-7a5c-4062-bc27-1ebbd8305c60)



## Indicadores de Desempenho
Para análise e monitoramento do desempenho do sistema, com o intuito de auxiliar na manutenção da aplicação, os seguintes indicadores foram definidos:

| Indicador | Objetivos  | Descrição | Cálculo  | Fonte dos Dados  | Perspectiva |
| - | - | - | -| - | - |
| Novos Usuários cadastrados | Monitorar a quantidade de usuários novos no mês para monitorar o crescimento da aplicação e desenvolver melhorias	|Número absoluto de clientes novos |	-	| Tabela de usuários |	Criar estratégia para atrais mais usuários |
|índice de satisfação |	Medir a qualidade do sistema por meio do usuário| Taxa de reclamação/ relatos de bugs |	Relatos avaliatívos do usuário	| Analíse dos usuários| Identificar possíveis erros ou bugs |
| Atividade do usuário |	Identificar o nível de atividade do usuários	| Criar estratégias para tornar o sistema útil e atrativo para o usuário |Análise de Tabelas| Tabelas | Número de listas de exercícios criadas	| Analisar os clientes que fizeram listas personalizadas	| Clientes que ultilizam o sistema na sua função principal	| -	| Análise de Dados	| Melhorar funcionalidades |
| Taxa de evasão do sistema |	Monitorar a quantidade de usuários que encerraram sua conta |	Taxa de exclusão de contas em determinado período |	Soma das compras realizadas pelos usuários |	Tabela de dados	| Melgorar a experiencia do usuário |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| A aplicação deverá permitir que os usuários insiram suas credenciais de login, como nome de usuário e senha, para acessar. | ALTA |
|RF-02| A aplicação deverá oferecer a opção para os usuários se registrarem dentro do próprio aplicativo, preenchendo um formulário com informações como nome, e-mail e senha. | ALTA |
|RF-03| A aplicação deverá redirecionar o usuário logado para a tela principal, onde será exibido uma lista de exercícios disponíveis para realizar. | ALTA |
|RF-04| A aplicação deverá permitir que o usuário selecione um exercício para visualizar as instruções de execução, que podem incluir um vídeo demonstrativo. | MÉDIA |
|RF-05| A aplicação deverá permitir que o usuário acesse o histórico de suas sessões de treino anteriores para acompanhar seu progresso ao longo do tempo. | MÉDIA |
|RF-06| A aplicação deverá permitir que o usuário visualize e atualize suas informações pessoais, como nome, foto de perfil e alteração de senha. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| A aplicação deve ser compatível com sistemas Android e iOS | ALTA |
|RNF-02| A aplicação deve ser compatível com os principais navegadores Web | ALTA |
|RNF-03| O projeto deverá ser implementado com um banco de dados NoSQL. | ALTA |
|RNF-04| A aplicação deve possuir interface intuitiva. | MÉDIA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Só poderão ser utilizados programas gratuitos ou fornecidos pela PUC Minas |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama casos drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/temp-e4-proj/assets/113618051/46a693a5-fdad-4033-a841-ff0a068ed527)

# Matriz de Rastreabilidade


A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

![Matriz de rastreabilidade](https://github.com/ICEI-PUC-Minas-PMV-ADS/temp-e4-proj/assets/113618051/bc9a21d7-79b5-4e09-a8c1-481d7fc64c69)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/blob/main/docs/img/grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![QuadroRafa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/assets/115122394/d24661ac-1d01-415f-ba00-e4dc72c07092)

