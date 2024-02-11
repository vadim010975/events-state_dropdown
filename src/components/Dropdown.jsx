import { useState } from 'react';
import Button from './Button';
import DropdownList from './DropdownList';

function Dropdown() {

  const [list, setList] = useState(false);

  return (
    <>
      <div className='main-container'>
        <Button callback={() => {
          setList(list => {
            return list ? false : true;
          });
        }} />
        <DropdownList activity={list} />
      </div>
    </>

  );
}

export default Dropdown;
