import { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import kuromiFace from '../../imgs/kuomiFace2.png';

function NavigateBar(): ReactElement {
  return (
    <NavLink to='{}'>
      <nav className='h-16 w-16'>
        <img className='h-full w-full' src={kuromiFace} alt='' />
      </nav>
    </NavLink>
  );
}

export default NavigateBar;
