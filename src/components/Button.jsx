import PropTypes from 'prop-types';

function Button({ callback }) {

  return (
    <>
      <button className='main-btn' onClick={callback}>ACCOUNT SETTINGS</button>
    </>
  )
}

Button.propTypes = {
  callback: PropTypes.func,
}

export default Button;
