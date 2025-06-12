import { type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TimePage from './pages/TimePage';
import ProposalPage from './pages/ProposalPage';
import ProporsalAcceptPage from './pages/ProporsalAcceptPage';

function App(): ReactElement {
  return (
    <main className='font-allura bg-whiteKuromin min-h-screen w-full'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/proposal/yes' Component={ProporsalAcceptPage} />
        <Route path='/proposal' Component={ProposalPage} />
        <Route path='/time' Component={TimePage} />
      </Routes>
    </main>
  );
}

export default App;
