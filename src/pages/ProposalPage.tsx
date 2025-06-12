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

  // const mudandoEscala: () => string = () => {
  //   if (messagemAtual === 0) {
  //     return 'scale-100';
  //   } else if (messagemAtual === 1) {
  //     console.log('ebtriy');
  //     return 'scale-200';
  //   }
  //   console.log(messagemAtual * 200);
  //   return `scale-${messagemAtual * 200}`;
  // };

  // const mudandoMargem: () => string = () => {
  //   if (messagemAtual === 0) {
  //     return 'ml-5';
  //   } else if (messagemAtual === 1) {
  //     console.log('ebtriy');

  //     return 'ml-20';
  //   }
  //   console.log(messagemAtual * 100);
  //   return `ml-${messagemAtual * 100}`;
  // };

  return (
    <div className='font-pacifico flex h-screen w-full flex-col items-center justify-center gap-14'>
      <img
        src={kuromiGifFaces[clicouSimOuNao ? 0 : 1]}
        alt=''
        className='rounded-lg'
      />
      <h1 className='text-4xl'>
        {`Quer passar mais esse dia dos namorados comigo??? ${clicouSimOuNao ? '(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ' : '.·°՞(っ-ᯅ-ς)՞°·.'}`}
      </h1>
      <form className='w-5/6 text-center'>
        <button
          type='button'
          style={{
            transform: `scale(${1 + messagemAtual * 1.8})`,
          }}
          className={`h-12 w-24 cursor-pointer rounded-md bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] p-2 shadow-2xl`}
          onClick={() => ondeEuCliquei(true)}
        >
          <span>Sim</span>
        </button>
        <button
          style={{
            marginLeft: `${messagemAtual === 0 ? 20 : messagemAtual * 120}px`, // 20px a mais por clique
            height: `${messagemAtual === 0 ? 48 : 60}px`, // 20px a mais por clique
          }}
          type='button'
          className={`h-12 ${clicouSimOuNao ? 'w-24' : ''} w-36 cursor-pointer rounded-md bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] p-2 text-center shadow-2xl`}
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
