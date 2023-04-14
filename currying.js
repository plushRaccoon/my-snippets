// Написать функцию curry, в которой реализовать логику каррирования для отправленной в нее функции. Итоговая функция должна вызываться как в обычном виде, так и каррированием. Функция должна называться curry
// Примеры:

function sum(a, b, c) {
  return a + b + c;
}

// Вместо функции sum может быть любая другая функция с определенным количеством аргументов

let curried = curry(sum);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...rest) {
        return curried(...args, ...rest);
      };
    }
  };
}

console.log(curried(1, 2, 3)); // 6
console.log(curried(1)(2, 3)); // 6
console.log(curried(1)(2)(3)); // 6
