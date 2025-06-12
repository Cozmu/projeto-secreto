import { useState, type ReactElement } from 'react';
import Header from '../components/Header';
import principal from '../../imgs/galery/fotoDelaPrincipal.jpg';
// import euEelaMxc from '../../imgs/galery/euEelaMxc.jpg';
import borderTop from '../../imgs/icons/borderTop2.png';
import borderBottom from '../../imgs/icons/borderBottom.png';
import florUm from '../../imgs/icons/flower2.png';
import florDois from '../../imgs/icons/flower3.png';
import canto from '../../imgs/icons/canto2.png';
import coracaoUm from '../../imgs/icons/heart1.png';
import kuromiAPX from '../../imgs/icons/KuromiApaix.png';
import flower9 from '../../imgs/icons/flower9.png';
import letterLove5 from '../../imgs/icons/letterLove5.png';
import heart6 from '../../imgs/icons/heart6.png';
import kuromiEscrev from '../../imgs/icons/kuromiEscrev.png';
import letterLove4 from '../../imgs/icons/letterLove4.png';
import flower10 from '../../imgs/icons/flower10.png';

const messagens: string[] = [
  'Você é a razão do meu sorriso.',
  'Cada momento ao seu lado é precioso.',
  'Te amar é a melhor parte do meu dia.',
  'Você é meu sonho realizado.',
  'Amo cada detalhe seu.',
  'Você é meu tudo.',
];

function Home(): ReactElement {
  const [isMessage] = useState<string[]>(messagens);

  return (
    <>
      <Header />
      <section className='flex h-screen items-center justify-center'>
        <div
          className={`relative flex h-3/4 w-3xl items-center justify-center rounded-2xl bg-gradient-to-r from-[#72421f] via-[#4e2e04] to-[#72421f] 2xl:mt-0 2xl:h-3/5`}
        >
          <section
            className={`notebook-lines-l bg-whiteKuromin shadow-bookPage inset-shadow-bookPageCenter relative flex h-[97%] w-[48%] items-center justify-center rounded-l-2xl border-r-[1px] border-slate-300`}
          >
            <img
              src={principal}
              alt=''
              className='mb-10 w-56 rounded-2xl border-10 border-transparent'
            />
            <div className='absolute -top-15 flex flex-col justify-between gap-28 2xl:-top-7'>
              <img src={borderTop} alt='' className='w-56' />
              <img src={borderBottom} alt='' className='w-56' />
            </div>
          </section>
          <section
            className={`notebook-lines-r bg-whiteKuromin inset-shadow-bookPageCenter shadow-bookPage rounded--2xl relative flex h-[97%] w-[48%] items-center rounded-r-2xl`}
          >
            <p className='px-1 text-2xl font-bold'>
              {`Algo para que sempre lembre do quanto amo você! <3`}
            </p>
            <span className='absolute right-2 bottom-3.5 text-2xl font-bold'>{`Para todo sempre seu, de: Jorge <3`}</span>
          </section>
          <div className='absolute bottom-3 left-5'>
            <img src={canto} alt='' className='w-24' />
          </div>
          <div className='absolute top-3 right-5 rotate-180'>
            <img src={canto} alt='' className='w-24' />
          </div>
          <div className='absolute left-5'>
            <img src={florUm} alt='' className='w-24' />
          </div>
          <div className='absolute left-70 scale-x-[-1] transform'>
            <img src={florUm} alt='' className='w-24' />
          </div>
          <div className='absolute bottom-4 ml-16'>
            <img src={florDois} alt='' className='w-32' />
          </div>
          <div className='absolute top-52 right-90'>
            <img src={coracaoUm} alt='' className='w-10 -rotate-30' />
          </div>
          <div className='absolute top-42 right-96'>
            <img src={coracaoUm} alt='' className='w-10 -rotate-15' />
          </div>
          <div className='absolute top-30 right-97'>
            <img src={coracaoUm} alt='' className='w-10 -rotate-1' />
          </div>
          <div className='absolute top-20 right-92'>
            <img src={coracaoUm} alt='' className='w-10 rotate-25' />
          </div>
          <div className='absolute right-10 bottom-20'>
            <img src={kuromiAPX} alt='' className='w-52' />
          </div>
          {/* <div className='absolute top-8 right-10'>
            <img src={euEelaMxc} alt='' className='w-68 rounded-xl' />
          </div> */}
        </div>
      </section>
      <section className='flex w-full justify-around bg-linear-to-bl from-[#8260a2] via-[#c097cf] to-[#8260a2] shadow-xl/20'>
        {isMessage.map((msg: string) => (
          <div key={msg} className='flex text-lg font-semibold text-nowrap'>
            <p>⋆.˚ ☾⭒.˚</p>
            <p>{msg}</p>
            <p className='scale-x-[-1]'>⋆.˚ ☾⭒.˚</p>
          </div>
        ))}
      </section>
      <section className='relative mx-auto w-2/5 py-30 text-2xl font-semibold'>
        <div className='absolute bottom-17 -left-18 w-20 rotate-270'>
          <img src={flower9} alt='' />
        </div>
        <div className='absolute -right-10 bottom-18 w-20 rotate-180'>
          <img src={flower9} alt='' />
        </div>
        <div className='absolute top-20 -left-18 w-20'>
          <img src={flower9} alt='' />
        </div>
        <div className='absolute top-20 -right-10 w-20 rotate-90'>
          <img src={flower9} alt='' />
        </div>
        <div className='absolute -right-28 bottom-70 w-40 rotate-90'>
          <img src={borderTop} alt='' />
        </div>
        <div className='absolute bottom-70 -left-36.5 w-40 rotate-270'>
          <img src={borderTop} alt='' />
        </div>
        <div className='absolute -left-100 w-40 -rotate-15'>
          <img src={letterLove5} alt='' />
        </div>
        <div className='absolute bottom-38 -left-45 w-15 -rotate-10'>
          <img src={heart6} alt='' />
        </div>
        <div className='absolute top-5 -right-100 w-60'>
          <img src={kuromiEscrev} alt='' />
        </div>
        <div className='absolute -right-120 bottom-28 w-60 rotate-45'>
          <img src={letterLove4} alt='' className='' />
        </div>
        <div className='absolute bottom-28 -left-110 w-30'>
          <img src={flower10} alt='' className='' />
        </div>
        <div>
          <p className='indent-10'>
            É difícil começar a escrever algo com tantos sentimentos envolvidos,
            tantas palavras que podem ser ditas para transmitir esse sentimento
            que quase não cabe no meu peito. Hoje, mais um Valentine's Day com
            você, sou grato a Deus por ter me concebido essa benção que é estar
            ao seu lado, compartilhando cada momento, criando todas essas
            lembranças, construindo nossa história para que um dia possamos
            contar para nossos netos o quão bom é ter alguém que amamos no nosso
            lado, que nos ajuda, nos ampara, nos entende, nos faz feliz.
          </p>
          <p className='indent-10'>
            Certamente é essa a felicidade que faz meu coração bater mais forte
            todos os dias que acordo e lembro que posso ver seu rosto, tocar sua
            pele, sentir seu cheiro, beijar sua boca, agarrar o seu corpo e dar
            um abraço apertado até nossas células se fundirem, convesar horas
            sobre qualquer besteira e rirmos juntos, não conseguiria viver sem
            isso. E por isso te digo, nunca tive tanta certeza que amo uma
            pessoa quanto eu amo você, e quero que esse amor dure para sempre,
            tanto em mim quanto em vc. Um dia de cada vez, estou tentando
            evoluir e amadurecer, para ser uma pessoa melhor e termos tudo que
            sempre sonhamos juntinhos no futuro. Eu, você e nossos pequenos
            ପ(๑•ᴗ•๑)ଓ ♡. Te amo infinitamente Larissa, hoje minha namorada..
            amanhã minha esposa. ❤️
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
