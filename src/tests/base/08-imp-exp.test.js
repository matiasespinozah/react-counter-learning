import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('priuebas en archivo 08-imp-exp', () => {
  test('debe retornar un heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(h => h.id === id);
    expect(heroe).toEqual(heroeData);
  })

  test('debe retornar un undefined si herore no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  })

  test('debe retornar los heroes DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const dcData = heroes.filter(h => h.owner === owner);
    expect(heroes).toEqual(dcData);
  })

  test('debe retornar los heroes Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    const marvelData = heroes.filter(h => h.owner === owner);
    expect(heroes).toEqual(marvelData);
    expect(marvelData.length).toBe(2);
  })
})
