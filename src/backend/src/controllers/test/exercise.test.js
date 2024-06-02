const { expect } = require('chai'); // Importa o expect do Chai para assertions
const sinon = require('sinon'); // Importa o sinon para simulação de funções

const ExerciseModel = require('src/controllers/ExerciseController.js'); 
const exerciseController = require('./exerciseController'); 

describe('exerciseController', () => {
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

    it('should create a new Exercise', async () => {
      const exercise = { name: 'Push-ups', series: 3, repetitions: 10, demo: 'video.mp4', thumb: 'image.jpg' };
      req.body = exercise; // Define os dados do corpo da requisição

      sandbox.stub(ExerciseModel, 'create').resolves(exercise); // Simula a criação bem-sucedida

      await exerciseController.create(req, res);

      expect(res.status).to.have.been.calledWith(201); // Verifica se o status da resposta é 201
      expect(res.json).to.have.been.calledWith({ response: exercise, message: 'Created' }); // Verifica o conteúdo da resposta
    });

    it('should handle errors', async () => {
      const error = new Error('Internal Server Error');
      sandbox.stub(ExerciseModel, 'create').throws(error); // Simula um erro na criação

      await exerciseController.create(req, res);

      expect(console.log).to.have.been.calledOnceWith(error); // Verifica se o erro foi logado
      expect(res.status).to.not.have.been.called; // Verifica se o status da resposta não foi definido
      expect(res.json).to.not.have.been.called; // Verifica se a resposta não foi enviada
    });
  });
});
