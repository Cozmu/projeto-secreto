import { type ReactElement } from 'react';
import Header from '../components/Header';
import principal from '../../imgs/galery/fotoDelaPrincipal.jpg';
import borderTop from '../../imgs/icons/borderTop2.png';
import borderBottom from '../../imgs/icons/borderBottom.png';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <section className='flex h-screen items-center justify-center'>
        <div
          className={`mb-20 flex h-3/4 w-3xl items-center justify-center rounded-2xl bg-gradient-to-r from-[#72421f] via-[#4e2e04] to-[#72421f] 2xl:h-3/5`}
        >
          <section
            className={`notebook-lines-l bg-whiteKuromin shadow-bookPage inset-shadow-bookPageCenter relative flex h-[97%] w-[48%] items-center justify-center rounded-l-2xl border-r-[1px] border-slate-300`}
          >
            <img
              src={principal}
              alt=''
              className='mb-10 w-56 rounded-2xl border-10 border-transparent'
            />
            <div className='absolute -top-7 flex flex-col justify-between gap-28'>
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
        </div>
      </section>
    </>
  );
}

export default Home;
