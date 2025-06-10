import { type ReactElement } from 'react';
import NavigateBar from './NavigateBar';
import arrow from '../../imgs/down-arrow.png';

function Header(): ReactElement {
  return (
    <header className='flex items-center justify-between p-1.5'>
      <div className='flex items-baseline'>
        <NavigateBar />
        <div className='flex items-center gap-1.5'>
          <img src={arrow} alt='' className='h-10 w-10 rotate-150' />
          <p className='text-base font-semibold'>Clieque aqui</p>
        </div>
      </div>
      <h1 className='mr-32 text-4xl font-semibold'>
        𓂃˖˳·˖ ִֶָ ⋆🪻͙⋆ ִֶָ˖·˳˖𓂃 ִֶָPara meu amor lindo𓂃˖˳·˖ ִֶָ ⋆🪻͙⋆ ִֶָ˖·˳˖𓂃 ִֶָ
      </h1>
      <div />
    </header>
  );
}

export default Header;
