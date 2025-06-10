import { type ReactElement } from 'react';
import NavigateBar from './NavigateBar';
function Header(): ReactElement {
  return (
    <header className='flex items-center justify-between'>
      <NavigateBar />
      <h1 className='text-4xl font-semibold'>
        𓂃˖˳·˖ ִֶָ ⋆🌷͙⋆ ִֶָ˖·˳˖𓂃 ִֶָPara meu amor lindo𓂃˖˳·˖ ִֶָ ⋆🌷͙⋆ ִֶָ˖·˳˖𓂃 ִֶָ
      </h1>
      <div />
    </header>
  );
}

export default Header;
