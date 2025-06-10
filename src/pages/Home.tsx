import { type ReactElement } from 'react';
import Header from '../components/Header';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <section className='flex h-screen items-center justify-center'>
        <div className='mb-20 ml-32 h-3/5 w-3xl rounded-2xl bg-amber-950'>
          <div className=''>
            <section>
              <img src='' alt='' />
            </section>
            <section>
              <p></p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
