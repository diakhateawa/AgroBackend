import express from 'express';
import controller  from './user.controller'; 
let publicRouter = express.Router() 
   .get('/', controller.getAllUsers)
   .get('/:id', controller.getOneUser)  
   .post('/', controller.createUser);

let privateRouter = express.Router()

let value={publicRouter:publicRouter,privateRouter:privateRouter}
export default value;
