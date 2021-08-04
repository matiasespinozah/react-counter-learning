import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleSustract = () => setCounter(counter - 1);
  const reset = () => setCounter(value);
  

  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>

      <button onClick={ handleSustract } > -1 </button>
      <button onClick={ reset } > reset </button>
      <button onClick={ handleAdd } > +1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;