import express, { Application } from "express";
import { AuthRoutes } from "./services/authController/routes";
import { ProjectRoutes } from "./services/projectController/routes";

export class App {
  readonly app: Application;
  readonly port: number;

  constructor() {
    this.app = express();
    this.port = 4000;
  }
  start() {
    this.runMiddleware();
    this.runServices();
    this.app.listen(this.port, () => {
      console.log(`listening to port ${this.port}`);
    });
  }

  runMiddleware() {
    const middlewares = [
      express.json(),
      express.urlencoded({ extended: true }),
    ];
    middlewares.forEach((middleware) => this.app.use(middleware));
  }

  runServices() {
    const services = [
      new AuthRoutes(),
      new ProjectRoutes(),
    ];
    services.forEach((service) =>
      this.app.use(`/api${service.path}`, service.getRoutes())
    );
  }
}
export default App;
