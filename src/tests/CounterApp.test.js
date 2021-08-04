import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('CounterApp', () => {

  let wrapper = shallow(<CounterApp value={10} />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={10} />);
  });

  test('debe mostrar componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>);
    const textValue = wrapper.find('h2').text();
    expect(Number(textValue)).toBe(value);
  })

  test('debe decrementar con el boton de -1', () => {
    wrapper.find('button').at(0).simulate('click');
    const textValue = wrapper.find('h2').text();
    expect(textValue.trim()).toBe('9');
  });

  test('debe incrementar con el boton de +1', () => {
    wrapper.find('button').at(2).simulate('click');
    const textValue = wrapper.find('h2').text();
    expect(textValue.trim()).toBe('11');
  });

  test('debe resetear con el boton de reset', () => {
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const textValue = wrapper.find('h2').text();
    expect(textValue.trim()).toBe('10');
  });
  
  
});
