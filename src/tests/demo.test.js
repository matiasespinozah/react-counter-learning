
describe('pruebas en el archivo demo.test.js', () => {
  test('deben de ser iguales los string', () => {
    // 1. inicialización
    const msg = 'Hola Mundo';
  
    // 2. estimulo
    const msg2 = `Hola Mundo`;
  
    // 3. observar el comportamiento
    expect(msg).toBe(msg2);
  });
  
});

