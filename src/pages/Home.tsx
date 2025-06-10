import { type ReactElement } from 'react';
import Header from '../components/Header';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <div className='flex flex-col'></div>
      {/* <p className='font-allura'>oi eu quero lorem</p> */}
    </>
  );
}

export default Home;
