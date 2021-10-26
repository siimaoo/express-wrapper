import { Router } from "express";

const router = Router();

export const routes = (arrayRoutes) => {
  return arrayRoutes.map(([method, path, ...handlers]) => {
    if (!method) throw Error("Method is required!");
    if (!path) throw Error("Path is required!");
    if (!handlers[0]) throw Error("Is required at least one handler function!");

    return router[method](path, ...handlers);
  });
};
