import { Injectable } from '../decorators/Injectable';
import { Controller } from '../decorators/Controller';
import { HttpGet, HttpPost } from '../decorators/HttpMethod';
import { Request, Response } from 'express';

@Controller(RootController, '/root')
export class RootController {
  @HttpGet('/hello')
  helloWorld (req: Request, res: Response) {
    res.json({message: 'Hello!!!'});
  }

  @HttpGet('/howdy')
  howdyThere (req: Request, res: Response) {
    res.json({message: 'HOWDY THERE :)'});
  }

  @HttpPost('/sendMessage')
  sendMessage(req: Request, res: Response) {
    console.log(req.body.message);
    res.status(200).send();
  }
}