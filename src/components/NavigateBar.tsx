import { useState, type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import kuromiFace from '../../imgs/icons/kuomiFace2.png';
import ampulheta from '../../imgs/icons/ampulheta.png';
import camera from '../../imgs/icons/camera.png';
import star from '../../imgs/icons/star.png';

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
        <button className='cursor-pointer' onClick={toggleDrop}>
          <img
            className={`h-24 w-24 transition-transform duration-800 ease-in-out ${rotated ? 'rotate-360' : 'rotate-0'}`}
            src={kuromiFace}
            alt=''
          />
        </button>
      </section>
      <nav className='absolute mt-4'>
        <ul
          className={`flex flex-col gap-4 text-center text-lg transition-all duration-500 ${
            isDrop
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <li className='group translate-0 cursor-pointer transition-all duration-500 ease-in hover:scale-105'>
            <NavLink className='flex' to='/time'>
              <p></p>Tempo com você
              <img
                src={ampulheta}
                alt='/'
                className='w-10 transition-transform duration-1200 ease-in-out group-hover:rotate-360'
              />
            </NavLink>
          </li>
          <li className='camera-container group translate-0 transition-all duration-500 ease-in hover:scale-105'>
            <NavLink className='flex items-center gap-2' to='#'>
              <p>Fotinhaas</p>
              <img
                src={camera}
                alt=''
                className='camera-icon mb-1 w-10 rotate-12 transition-transform'
              />
            </NavLink>
          </li>
          <li className='group translate-0 transition-all duration-500 ease-in hover:scale-105'>
            <NavLink className='flex items-center' to='/proposal'>
              <p>Proposta imperdivel</p>
              <img
                src={star}
                alt=''
                className='w-10 pb-1 transition-transform delay-1000 group-hover:animate-bounce'
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigateBar;
