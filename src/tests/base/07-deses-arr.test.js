import { retornaArreglo } from '../../base/07-deses-arr';

describe('pruebas en archivo 07-des-arr.js', () => {
  
  test('debe retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo(); // ['ABC', 123]
    
    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');
  });
  
})
