import { type ReactElement } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

const kuromiGifFaces: string[] = [
  'https://gifdb.com/images/high/kuromi-shining-eyes-1xpyotjawsgegbux.webp',
  'https://gifdb.com/images/high/kuromi-bawling-4gtdl56o2fc50cw9.webp',
  'https://gifdb.com/images/high/kuromi-heart-eyes-vvecbodpq3w9pgs8.webp',
];

const messagensRecebendoNao: string[] = [
  'Tem certeza?',
  'Sério mesmo??',
  'Tem certeza?',
  'Pookie, por favor...',
  'Pense nisso!',
  'Se você disser não, ficarei muito triste...',
  'Ficarei muito triste...',
  'Ficarei muito, muito triste...',
  'Tá bom, vou parar de perguntar...',
  'Brincadeira, diga sim, por favor! ❤️',
];

function ProposalPage(): ReactElement {
  const navigate: NavigateFunction = useNavigate();
  const ondeEuCliquei: (simOuNao: boolean) => void = (simOuNao: boolean) => {
    if (simOuNao) {
      navigate('/proposal/yes');
    }
  };
  return (
    <div className='font-pacifico flex h-screen w-full flex-col items-center justify-center gap-14'>
      <img src={kuromiGifFaces[2]} alt='' className='rounded-lg' />
      <h1 className='text-4xl'>
        Quer passar mais esse dia dos namorados comigooo?
      </h1>
      <form className='flex gap-10'>
        <button
          type='button'
          className='h-10 w-24 cursor-pointer rounded-md bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] shadow-2xl duration-500 ease-in-out hover:animate-pulse'
          onClick={() => ondeEuCliquei(true)}
        >
          <span>Sim</span>
        </button>
        <button
          type='button'
          className='h-10 w-24 cursor-pointer rounded-md bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] shadow-2xl duration-500 ease-in-out hover:animate-pulse'
          onClick={() => ondeEuCliquei(false)}
        >
          <span>{'Não'}</span>
        </button>
      </form>
    </div>
  );
}

export default ProposalPage;
