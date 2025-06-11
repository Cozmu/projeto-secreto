import { type ReactElement } from 'react';
import Header from '../components/Header';
import principal from '../../imgs/galery/fotoDelaPrincipal.jpg';
import borderTop from '../../imgs/icons/borderTop2.png';
import borderBottom from '../../imgs/icons/borderBottom.png';
import florUm from '../../imgs/icons/flower2.png';
import florDois from '../../imgs/icons/flower3.png';
import canto from '../../imgs/icons/canto2.png';
import coracaoUm from '../../imgs/icons/heart1.png';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <section className='flex h-screen items-center justify-center'>
        <div
          className={`relative flex h-3/4 w-3xl items-center justify-center rounded-2xl bg-gradient-to-r from-[#72421f] via-[#4e2e04] to-[#72421f] 2xl:mt-0 2xl:mb-20 2xl:h-3/5`}
        >
          <section
            className={`notebook-lines-l bg-whiteKuromin shadow-bookPage inset-shadow-bookPageCenter relative flex h-[97%] w-[48%] items-center justify-center rounded-l-2xl border-r-[1px] border-slate-300`}
          >
            <img
              src={principal}
              alt=''
              className='mb-10 w-56 rounded-2xl border-10 border-transparent'
            />
            <div className='absolute -top-15 flex flex-col justify-between gap-28 2xl:-top-7'>
              <img src={borderTop} alt='' className='w-56' />
              <img src={borderBottom} alt='' className='w-56' />
            </div>
          </section>
          <section
            className={`notebook-lines-r bg-whiteKuromin inset-shadow-bookPageCenter shadow-bookPage rounded--2xl relative flex h-[97%] w-[48%] items-center rounded-r-2xl`}
          >
            <p className='px-1 text-2xl font-bold'>
              {`Algo para que sempre lembre do quanto amo você! <3`}
            </p>
            <span className='absolute right-2 bottom-3.5 text-2xl font-bold'>{`Para todo sempre seu, de: Jorge <3`}</span>
          </section>
          <div className='absolute bottom-3 left-5'>
            <img src={canto} alt='' className='w-24' />
          </div>
          <div className='absolute top-3 right-5 rotate-180'>
            <img src={canto} alt='' className='w-24' />
          </div>
          <div className='absolute left-5'>
            <img src={florUm} alt='' className='w-24' />
          </div>
          <div className='absolute left-70 scale-x-[-1] transform'>
            <img src={florUm} alt='' className='w-24' />
          </div>
          <div className='absolute bottom-4 ml-16'>
            <img src={florDois} alt='' className='w-32' />
          </div>
          <div className='absolute top-52 right-90'>
            <img src={coracaoUm} alt='' className='w-10 -rotate-30' />
          </div>
          <div className='absolute top-42 right-96'>
            <img src={coracaoUm} alt='' className='w-10 -rotate-15' />
          </div>
          <div className='absolute top-30 right-97'>
            <img src={coracaoUm} alt='' className='w-10 -rotate-1' />
          </div>
          <div className='absolute top-20 right-92'>
            <img src={coracaoUm} alt='' className='w-10 rotate-25' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
