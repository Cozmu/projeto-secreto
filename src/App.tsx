import { type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App(): ReactElement {
  return (
    <main className='font-allura bg-whiteKuromin min-h-screen w-full'>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </main>
  );
}

export default App;
