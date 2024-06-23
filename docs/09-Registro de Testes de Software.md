# Registro de Testes de Software

O Registro de Testes de Software é um documento crucial no processo de teste de software que registra todos os detalhes relevantes relacionados à execução de testes. Ele serve como um repositório centralizado de informações sobre os testes realizados.



**User Create**

![registro user](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/assets/113618051/fcbf63f3-e79b-402f-bb10-702f4208cf72)



**Valid User**

![user create](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/assets/113618051/58861b88-9f6a-493c-9d17-b6a084ce424c)

**group create**

![groups create](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/assets/113618051/1aaad24b-4b56-4c5b-9eba-6621223c10e5)

**Exercice groups**

![grupos exercicios ](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projgym/assets/113618051/ab9172f3-c9d4-46da-b3b7-e848300d3859)

# Avaliação 


| Caso de Teste                     | Descrição                                              | Passos para Execução                                                                                                                                                                                                                                                                                                            | Dados de Entrada                                                                                                                                                     | Resultado Esperado                                                                 | Resultado Obtido       | Status                 | Taxa de Êxito |
|-----------------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|------------------------|------------------------|---------------|
| Cadastrar Usuário                 | Verificar se o sistema permite o cadastro de usuário   | 1. Navegar para a página de cadastro. <br>2. Preencher os campos obrigatórios (nome, email, senha, confirmação de senha). <br>3. Clicar no botão "Cadastrar".                                                                                                                              | Nome: João Silva <br>Email: joao.silva@example.com <br>Senha: 12345678 <br>Confirmação de Senha: 12345678                                                           | O sistema deve exibir uma mensagem de sucesso e redirecionar o usuário para a página inicial. | 100% | Aprovado | 100%     |
| Mostrar Histórico de Exercício    | Verificar se o sistema exibe o histórico de exercícios | 1. Fazer login com um usuário cadastrado. <br>2. Navegar para a página de histórico de exercícios.                                                                                                                                                                                         | Usuário: joao.silva@example.com <br>Senha: 12345678                                                                                                                  | O sistema deve exibir uma lista de exercícios realizados pelo usuário, com detalhes como data, tipo de exercício e duração. | 100% | Aprovado | 100%      |
| Alterar Cadastro                  | Verificar se o usuário pode alterar suas informações   | 1. Fazer login com um usuário cadastrado. <br>2. Navegar para a página de perfil. <br>3. Alterar os dados desejados (nome, email, senha). <br>4. Clicar no botão "Salvar".                                                                                                                  | Usuário: joao.silva@example.com <br>Senha: 12345678 <br>Novo Nome: João S. Silva <br> Novo Email: joao.s.silva@example.com                                           | O sistema deve exibir uma mensagem de sucesso e atualizar as informações do usuário. | 100% | Aprovado| 100%      |
| Alterar Exercícios                | Verificar se o usuário pode alterar detalhes de exercício | 1. Fazer login com um usuário cadastrado. <br>2. Navegar para a página de histórico de exercícios. <br>3. Selecionar um exercício para edição. <br>4. Alterar os dados do exercício (data, tipo de exercício, duração). <br>5. Clicar no botão "Salvar".                                   | Usuário: joao.silva@example.com <br>Senha: 12345678 <br>Novo Tipo de Exercício: Corrida <br>Nova Duração: 45 minutos                                                 | O sistema deve exibir uma mensagem de sucesso e atualizar os detalhes do exercício. | 100% | Aprovado | 100%       |

Obs: Taxa de êxito calculada com base em 10 tentativas.



