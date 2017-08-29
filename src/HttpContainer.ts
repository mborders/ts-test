import { Controllers, Controller, HttpController } from './decorators/Controller';
import { GetDecorators } from './decorators/Get';
import { HttpDecorator } from './decorators/HttpDecorator';
import * as express from 'express';

export class HttpContainer {
  constructor() {}
  
  register (router: express.Router) {
    const controllers: HttpController[] = Controllers;
    const getFunctions: HttpDecorator[] = GetDecorators;

    for (let i in getFunctions) {
      const getFunc: HttpDecorator = getFunctions[i];
      
      for (let j in controllers) {
        const controller: HttpController = controllers[j];

        if (controller.targetClass === getFunc.targetClass) {
          const path = `${controller.path}${getFunc.path}`;
          console.log(`GET ${path}`);
          router.get(path, getFunc.fcn);
        }
      }
    }
  }
}