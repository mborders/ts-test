import { RootController } from './controllers/RootController';
import { Inject } from './decorators/Inject';
import { HttpContainer } from './HttpContainer';
import * as express from 'express';
import { createServer, Server } from 'http';
import * as bodyParser from 'body-parser';

class App {
  @Inject(RootController)
  private rootController: RootController;

  private _express: express.Express;
  private _router: express.Router;
  private _container: HttpContainer;
  private _server: Server;

  constructor() {
    this._express = express();
    this._server = createServer(this._express);

    this._router = express.Router();
    this._router.use(bodyParser.urlencoded({ extended: false }));
    this._router.use(bodyParser.json());
    
    this._container = new HttpContainer();
    this._container.register(this._router);
    this._express.use('/api', this._router);
  }

  public startListening = (port: number): void => {
    this._server.listen(port, (err: Error) => {
      if (err) {
        return console.log(err);
      }

      console.log(`Server is listening on ${port}`);
    });
  };
}

const app = new App();
app.startListening(3000);
