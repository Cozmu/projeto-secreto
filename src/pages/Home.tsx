import { type ReactElement } from 'react';
import Header from '../components/Header';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <section className='flex h-screen items-center justify-center'>
        <div
          className={`mb-20 flex h-3/5 w-3xl items-center justify-center rounded-2xl bg-gradient-to-r from-[#6d5006] via-[#4e2e04] to-[#6d5006]`}
        >
          <section
            className={`notebook-lines-l bg-whiteKuromin shadow-bookPage inset-shadow-bookPageCenter h-[97%] w-[48%] rounded-l-2xl border-r-[1px] border-slate-300`}
          >
            <img src='' alt='' />
          </section>
          <section className='notebook-lines-r bg-whiteKuromin inset-shadow-bookPageCenter shadow-bookPage rounded--2xl h-[97%] w-[48%] rounded-r-2xl'>
            <p></p>
          </section>
        </div>
      </section>
    </>
  );
}

export default Home;
