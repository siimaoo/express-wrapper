import express from "express";
import { ErrorHandler } from './errors.js';

const defaultConfig = {
  port: 3000,
  onStart: function () {
    console.log(`Server is running on port: ${this?.port}`);
  },
};

export const generateServer = ({ port, onStart, routes }) => {
  const app = express();

  app.use(express.json());
  
  routes?.forEach((route) => {
    app.use(route);
  });

  app.use(ErrorHandler);

  const start = () => {
    app.listen(port || defaultConfig.port, () => {
      if (onStart) return onStart();
      defaultConfig.onStart();
    });
  };

  return { app, start };
};
