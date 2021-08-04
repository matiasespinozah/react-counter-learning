import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";


describe('pruebas archivo 09-promesas.js', () => {
  
  test('debe retornar un herore async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then(heroe => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('debe retornar un error si el heroe id no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    })
  });
  
})
