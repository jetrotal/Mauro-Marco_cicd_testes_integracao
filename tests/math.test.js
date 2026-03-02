const math = require('../math');

describe('math.js', () => {
  test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
  });

// test('forçando uma falha ', () => {
//     expect(math.add(2, 3)).toBe(6); // resultado errado de propósito para testar a falha
//   });

  test('soma com números negativos', () => {
    expect(math.add(-2, -3)).toBe(-5);
  });

  test('subtração com resultado positivo', () => {
    expect(math.subtract(10, 4)).toBe(6);
  });

  test('subtração com resultado negativo', () => {
    expect(math.subtract(4, 10)).toBe(-6);
  });

  test('multiplicação de positivo por negativo', () => {
    expect(math.multiply(6, -3)).toBe(-18);
  });

  test('multiplicação por zero', () => {
    expect(math.multiply(99, 0)).toBe(0);
  });

  test('divisão simples', () => {
    expect(math.divide(20, 5)).toBe(4);
  });

  test('divisão com números negativos', () => {
    expect(math.divide(-20, 5)).toBe(-4);
  });

  test('caso especial: divisão por zero retorna Infinity', () => {
    expect(math.divide(10, 0)).toBe(Infinity);
  });

  test('caso especial: 0 dividido por número não-zero', () => {
    expect(math.divide(0, 7)).toBe(0);
  });

  test('caso especial: divisão 0 por 0 retorna NaN', () => {
    expect(math.divide(0, 0)).toBeNaN();
  });
});
