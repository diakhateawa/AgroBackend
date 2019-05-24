import UserService from './user.service';
import Errorshandling from '../service/errorshandling';
/* import logger from '../../../components/logger';  */
import fs from 'fs';

class UserController{

  /**
   * subscribe 
   * @param req
   * @param res
   * @returns {Promise<Spy>}
   */



  async  createUser(req, res) {
    let user = {
      prenom: req.body.prenom,
      nom: req.body.nom,
      couriel: req.body.couriel,
      password: req.body.password,
      
    };
    try {
      let _user= await UserService. createUser(user);
      if(!_user) {
        return Errorshandling.throwError('Error occurred when trying to subscribe as a partner', 'Error occurred when trying to subscribe as a partner', 500);
      } 
      res.json(_user);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

  /**
   * Get one partner
   * @param req
   * @param res
   * @returns {Promise<Spy>}
   */
  async  getOneUser(req, res) {
    if(!req.params.id) {
      return Errorshandling.handleError(res, 422, 'Trying to get one partner without id', 'idPartner is required');
    }
    try {
      let partner = await UserService.getOneUser(req.params.id);
      if(!partner) {
        return Errorshandling.throwError('Error occurred when trying to get this partner', 'Error occurred when trying to get this partner', 500);
      }
      res.json(partner);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

 

  async  getAllUsers(req, res) {
    try {
      let users = await UserService.getAllUser();
      res.json(users);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

 
    
}
export default new UserController();