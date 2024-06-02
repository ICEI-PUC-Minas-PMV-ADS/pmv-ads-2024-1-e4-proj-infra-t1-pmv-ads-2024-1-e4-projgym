const { expect } = require('chai'); // Importa o expect do Chai para assertions
const sinon = require('sinon'); // Importa o sinon para simulação de funções

const ExercicioGrupoModel = require('src/controllers/ExercicioGrupoController.js'); 
const exercicioGrupoController = require('src/controllers/ExercicioGrupoController.js'); 

describe('exercicioGrupoController', () => {
  describe('create', () => {
    let req;
    let res;
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox(); // Cria um sandbox para isolar os testes
      req = { body: {} }; // Mock da requisição
      res = { status: sandbox.stub(), json: sandbox.stub() }; // Mock da resposta
    });

    afterEach(() => {
      sandbox.restore(); // Restaura o estado original do sandbox
    });

    it('should create a new ExercicioGrupo', async () => {
      const item = { grupo_id: 1, exer_id: 2 };
      req.body = item; // Define os dados do corpo da requisição

      sandbox.stub(ExercicioGrupoModel, 'create').resolves(item); // Simula a criação bem-sucedida

      await exercicioGrupoController.create(req, res);

      expect(res.status).to.have.been.calledWith(201); // Verifica se o status da resposta é 201
      expect(res.json).to.have.been.calledWith({ response: item, message: 'Created' }); // Verifica o conteúdo da resposta
    });

    it('should handle errors', async () => {
      const error = new Error('Internal Server Error');
      sandbox.stub(ExercicioGrupoModel, 'create').throws(error); // Simula um erro na criação

      await exercicioGrupoController.create(req, res);

      expect(console.log).to.have.been.calledOnceWith(error); // Verifica se o erro foi logado
      expect(res.status).to.not.have.been.called; // Verifica se o status da resposta não foi definido
      expect(res.json).to.not.have.been.called; // Verifica se a resposta não foi enviada
    });
  });
});