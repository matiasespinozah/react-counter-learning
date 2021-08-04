import { getSaludo } from '../../base/02-template-string';

describe('pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar "Hola Fernando"', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola Fernando');
  });

  test('getSaludo debe retornar "Hola Carlos" si no hay argumentos en la funcion', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  })
  
});
