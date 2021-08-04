import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Componente PrimeraApp', () => {
  
  // test('demostrar el mensaje "Hola, soy Goku"', () => {
  //   const saludo = 'Hola soy Goku';
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola soy Goku';
    const subtitulo = 'soy un subtitulo';
    const wrapper = shallow(
        <PrimeraApp 
          saludo={saludo}
          subtitulo={subtitulo}
        />
      );
    const textParrafo = wrapper.find('p').text();  
    expect(textParrafo.trim()).toBe(subtitulo.trim());
  })
  
  
  
});
