const { expect } = require('chai');
const sinon = require('sinon');

const User = require('../models/User'); 
const UserController = require('src/controllers/UserController.js'); 

describe('UserController', () => {
  describe('createHist', () => {
    let req;
    let res;
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      req = { body: { exer_id: 1, user_id: 2 } };
      res = { status: sandbox.stub(), json: sandbox.stub() }; // Mock response
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should create a new historical record', async () => {
      const user = { _id: 2, historicos: [] };
      sandbox.stub(User, 'findByIdAndUpdate').resolves(user); // Simulate successful update

      await UserController.createHist(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({ message: 'Histórico criado' });
    });

    it('should handle errors', async () => {
      const error = new Error('Internal Server Error');
      sandbox.stub(User, 'findByIdAndUpdate').throws(error);

      await UserController.createHist(req, res);

      expect(console.log).to.have.been.calledOnceWith(error);
      expect(res.status).to.not.have.been.called;
      expect(res.json).to.not.have.been.called;
    });
  });
});
