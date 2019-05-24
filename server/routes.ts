import { Application } from 'express'; 
import path from 'path';  
import userRouter from './api/controllers/user';

 
 
//const url = config.url;
const url = '/api/v1'
export default function routes(app: Application): void {
 
 
 app.use('/api/v1/users', userRouter.publicRouter);
 
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
};


 