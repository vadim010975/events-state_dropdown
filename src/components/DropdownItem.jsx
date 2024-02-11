import PropTypes from 'prop-types';

function DropdownItem({ item, selected, callback }) {

  return (
    <>
      <p
        className="dropdown-item"
        style={item === selected ? { color: 'blue' } : {}}
        onClick={() => callback(item)}
      >{item}</p>
    </>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.string,
  selected: PropTypes.string,
  callback: PropTypes.func,
}

export default DropdownItem;
