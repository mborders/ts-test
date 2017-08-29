import { Injectable } from '../decorators/Injectable';
import { Controller } from '../decorators/Controller';
import { Get } from '../decorators/Get';
import { Request, Response } from 'express';

@Controller(RootController, '/root')
export class RootController {
  constructor() {
    console.log('Root Controller initialized.');
  }

  @Get('/hello')
  helloWorld (req: Request, res: Response) {
    res.json({message: 'Hello!!!'});
  }

  @Get('/howdy')
  howdyThere (req: Request, res: Response) {
    res.json({message: 'HOWDY THERE :)'});
  }
}