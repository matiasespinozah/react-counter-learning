import PropTypes from 'prop-types';

// Functional component
const PrimeraApp = ({ saludo, subtitulo }) => {

  return (
    <>
      <h1> { saludo } </h1>
      <p> { subtitulo } </p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtitulo'
};

export default PrimeraApp;