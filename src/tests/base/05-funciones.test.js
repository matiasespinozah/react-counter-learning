import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('pruebas en 05-funciones', () => {
  
  test('getUser debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const username = 'El_Papi1502';
    const userTest = {
      uid: 'ABC567',
      username: username
    };
    const user = getUsuarioActivo(username);

    expect(user).toEqual(userTest);
  });
  
});
