import { useState, type ReactElement } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

const kuromiGifFaces: string[] = [
  'https://gifdb.com/images/high/kuromi-shining-eyes-1xpyotjawsgegbux.webp',
  'https://gifdb.com/images/high/kuromi-bawling-4gtdl56o2fc50cw9.webp',
  // 'https://gifdb.com/images/high/kuromi-heart-eyes-vvecbodpq3w9pgs8.webp',
];

const messagensRecebendoNao: string[] = [
  'Tem certeza?',
  'Sério mesmo??',
  'Tem certeza?',
  'Por favor...',
  'Pense nisso!',
  'Se você disser não, ficarei muito triste...',
  'Ficarei muito triste...',
  'Ficarei muito, muito triste...',
  'Tá bom, vou parar de perguntar...',
  'Brincadeira, diga sim, por favor! ❤️',
];

function ProposalPage(): ReactElement {
  const [messagemAtual, setMessagemAtual] = useState<number>(0);
  const [clicouSimOuNao, setClicouSimOuNao] = useState<boolean>(true);
  const navigate: NavigateFunction = useNavigate();

  const ondeEuCliquei: (simOuNao: boolean) => void = (simOuNao: boolean) => {
    setClicouSimOuNao(simOuNao);
    if (simOuNao) {
      navigate('/proposal/yes');
    }
    if (messagemAtual >= messagensRecebendoNao.length) {
      return;
    }
    setMessagemAtual(messagemAtual + 1);
  };

  return (
    <div className='font-pacifico flex h-screen w-full flex-col items-center justify-center gap-14'>
      <img
        src={kuromiGifFaces[clicouSimOuNao ? 0 : 1]}
        alt=''
        className='rounded-lg'
      />
      <h1 className='text-4xl'>
        Quer passar mais esse dia dos namorados comigooo?
      </h1>
      <form className='flex flex-wrap gap-10'>
        <button
          type='button'
          className='h-12 w-24 cursor-pointer rounded-md bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] p-2 shadow-2xl duration-500 ease-in-out hover:animate-pulse'
          onClick={() => ondeEuCliquei(true)}
        >
          <span>Sim</span>
        </button>
        <button
          type='button'
          className={`h-12 ${clicouSimOuNao ? 'w-24' : ''} cursor-pointer rounded-md bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] p-2 text-center shadow-2xl duration-500 ease-in-out hover:animate-pulse`}
          onClick={() => ondeEuCliquei(false)}
        >
          <span>
            {messagemAtual === 0
              ? 'Não'
              : messagensRecebendoNao[messagemAtual - 1]}
          </span>
        </button>
      </form>
    </div>
  );
}

export default ProposalPage;
