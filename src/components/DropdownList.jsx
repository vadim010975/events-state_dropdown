import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';
import list from '../list';

function DropdownList({ activity }) {

  const [selected, setSelected] = useState('Profile Information');

  return (
    <ul className='dropdown-list' style={activity ? {} : {display: "none"}}>
      {list.map((el) => (
        <li key={uuidv4()} className='dropdown-list-item'>
          <DropdownItem item={el} selected={selected} callback={(item) => {
            setSelected(() => item);
          }}/>
        </li>
      ))}
    </ul>

  );
}

DropdownList.propTypes = {
  activity: PropTypes.bool,
}

export default DropdownList;