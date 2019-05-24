import User from './user.model';
import GenericRepository from '../service/generic.repository';
import ErrorHandling from '../service/errorshandling';
const UserRepository = new GenericRepository(User);
export class UserService  {
  /**
   * save a new instance of partner
   * @param partner
   * @returns {Promise.<*>}
   */

  async createUser(user) {
    console.log(user);
    let _user = null;
    try {
      const objetUser=new User(user);
      const err=objetUser.validateSync();
      _user = await UserRepository.save(objetUser);
    } catch(err) {
      console.log(err);
      return ErrorHandling.throwError(err, 'An Error occurred when saving this partner', 500);

    }

    return _user;
  };


  
  /**
   * Get all Ecolinscriptionse
   * @returns {Promise.<*>}
   */
   async getAllUser()   {
    let users = [];
    try {
      users  = await UserRepository.getAll();
      console.log(users.length)
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when getting all users ', 500);
    }
    return users ;
  };

  /**
   * Get one partner
   * @param idPartner
   * @returns {Promise.<*>}
   */

  async getOneUser (iduser)  {
    let  user = null;
    try {
      user = await UserRepository.getOne(iduser);
      
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when getting this partner', 500);
    }
    return  user;
  };
};
export default new UserService();
