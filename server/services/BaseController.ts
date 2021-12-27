import { Router } from "express";

export abstract class BaseRoute {
  public path: string;

  public abstract getRoutes: Router;
}
