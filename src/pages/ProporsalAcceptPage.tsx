import { type ReactElement } from 'react';
import arrow2 from '../../imgs/icons/arrow2.png';
import { NavLink } from 'react-router-dom';
function ProporsalAcceptPage(): ReactElement {
  return (
    <div className='font-pacifico flex h-screen w-full flex-col items-center justify-center gap-10 text-4xl'>
      <img
        src='https://gifdb.com/images/high/kuromi-heart-eyes-vvecbodpq3w9pgs8.webp'
        alt=''
        className='rounded-lg'
      />
      <h1 className='text-4xl'>
        {`Obrigado por aceitaaar!!! Vamos nos divertir muito hoje ⸜(｡˃ ᵕ ˂ )⸝♡`}
      </h1>
      <section className='flex flex-col items-center justify-center gap-2 text-2xl duration-200 ease-in-out hover:scale-110'>
        <NavLink to='/' className='w-20 cursor-pointer'>
          <img src={arrow2} alt='' />
          <p className='text-center'>Voltar</p>
        </NavLink>
      </section>
    </div>
  );
}

export default ProporsalAcceptPage;
