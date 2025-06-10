import { useState, type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import kuromiFace from '../../imgs/kuomiFace2.png';

function NavigateBar(): ReactElement {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [rotated, setRotated] = useState<boolean>(false);

  const toggleDrop: () => void = () => {
    setIsDrop((prev: boolean) => !prev);
    setRotated((prev: boolean) => !prev);
  };

  return (
    <div>
      <section className='h-24 w-24'>
        <button className='cursor-pointer shadow' onClick={toggleDrop}>
          <img
            className={`h-24 w-24 transition-transform duration-800 ease-in-out ${rotated ? 'rotate-360' : 'rotate-0'}`}
            src={kuromiFace}
            alt=''
          />
        </button>
      </section>
      <nav className='absolute'>
        <ul
          className={`font-patrickHand ${isDrop ? 'flex' : 'hidden'} flex-col justify-start gap-7 text-center`}
        >
          <li>
            <NavLink to='{}'>Tempo com voce</NavLink>
          </li>
          <li>
            <NavLink to='{}'>galeria</NavLink>
          </li>
          <li>
            <NavLink to='{}'>proposta</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigateBar;
