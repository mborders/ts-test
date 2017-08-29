import { HttpDecorator } from './HttpDecorator';

export const GetDecorators: HttpDecorator[] = [];

export function Get(path: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    GetDecorators.push({
      targetClass: target.constructor.name,
      path,
      fcn: target[propertyKey]
    });
  }
}
