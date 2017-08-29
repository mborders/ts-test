

export function Injectable(target: any) {
  const original = target;

  const newConstructor: any = function (...args: any[]) {
    const c: any = function () {
      return new original(args);
    };
    c.prototype = original.prototype;

    return c(original, args);
  };

  newConstructor.prototype = original.prototype;
  return newConstructor;
}