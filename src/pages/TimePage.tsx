import { useEffect, useState, type ReactElement } from 'react';
import ampulheta from '../../imgs/icons/ampulheta.png';
import kuromiPensando from '../../imgs/icons/kuromiPensando.png';
import euEelaNATAL from '../../imgs/galery/euEelaNATAL.jpg';
import flower5 from '../../imgs/icons/flower5.png';
import kuromiNaJanela from '../../imgs/icons/kuromiNaJanela.png';
import arrow2 from '../../imgs/icons/arrow2.png';
import heart2 from '../../imgs/icons/heart2.png';
import { NavLink } from 'react-router-dom';
import kuromiComFlor from '../../imgs/icons/kuromiComFlor.png';

interface TempoDecorrido {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calcularTempoDesde(dataInicial: Date): TempoDecorrido {
  const agora: Date = new Date();
  const diffMs: number = agora.getTime() - dataInicial.getTime(); // diferença em ms

  const segundosTotais: number = Math.floor(diffMs / 1000);
  const dias: number = Math.floor(segundosTotais / (3600 * 24));
  const horas: number = Math.floor((segundosTotais % (3600 * 24)) / 3600);
  const minutos: number = Math.floor((segundosTotais % 3600) / 60);
  const segundos: number = segundosTotais % 60;

  return { dias, horas, minutos, segundos };
}

function TempoDesde(): ReactElement {
  const [dataInicial] = useState<Date>(new Date(2023, 6, 29)); // 29/07/2023 → mês é zero-based: 6 = julho

  const [tempo, setTempo] = useState<TempoDecorrido>(() =>
    calcularTempoDesde(dataInicial),
  );
  const [rotacaoAmpulheta, setRotacaoAmpulheta] = useState<boolean>(false);

  useEffect(() => {
    const intervaloAmpulheta: number = setInterval(() => {
      setRotacaoAmpulheta((prev: boolean) => !prev);
    }, 5000);

    return (): void => clearInterval(intervaloAmpulheta);
  }, [rotacaoAmpulheta]);

  useEffect(() => {
    const intervalo: number = setInterval(() => {
      setTempo(calcularTempoDesde(dataInicial));
    }, 1000);

    return (): void => clearInterval(intervalo);
  }, [dataInicial]);

  return (
    <div className='font-pacifico relative flex h-screen w-full flex-col items-center justify-center gap-5'>
      <section className='absolute bottom-43 left-10 w-48'>
        <img src={flower5} alt='' />
      </section>
      <section className='absolute top-43 left-56 w-48 rotate-180'>
        <img src={flower5} alt='' />
      </section>
      <section className='absolute top-49 left-13 w-20'>
        <p className='font- text-2xl'>-`♡´-</p>
      </section>
      <section className='absolute left-25 w-64'>
        <img src={euEelaNATAL} alt='' className='rounded-xl' />
      </section>
      <section className='absolute bottom-15 left-100 w-64 rotate-6'>
        <img src={kuromiComFlor} alt='' className='' />
      </section>

      <section className='relative'>
        <div className='absolute -top-47 left-8'>
          <img src={kuromiPensando} alt='' />
        </div>
        <h2 className='text-right'>❀𖤣𖥧𖡼⊱✿⊰𖡼𖥧𖤣❀</h2>

        <h1 className='text-3xl'>
          TODO ESSE TEMPÃO SENDO FELIZ AO SEU LADO (๑•̀ㅁ•́๑)✧
        </h1>
        <h2>❀𖤣𖥧𖡼⊱✿⊰𖡼𖥧𖤣❀</h2>
      </section>
      <section className='flex gap-5'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='text-9xl'>{tempo.dias}:</p>
          <p className='mr-10'>DIAS</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='text-9xl'>{tempo.horas.toString().padStart(2, '0')}:</p>
          <p className='mr-10'>HORAS</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='text-9xl'>
            {tempo.minutos.toString().padStart(2, '0')}:
          </p>
          <p className='mr-10'>MINUTOS</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='w-40 text-9xl'>
            {tempo.segundos.toString().padStart(2, '0')}
          </p>
          <p className='mr-10'>SEGUNDOS</p>
        </div>
        <div className=''>
          <img
            src={ampulheta}
            alt=''
            className={`${rotacaoAmpulheta ? 'rotate-360' : 'rotate-0'} transition-transform duration-3000 ease-in-out`}
          />
        </div>
      </section>
      <section className='absolute top-20 right-20 w-72'>
        <img src={heart2} alt='' />
      </section>
      <section className='absolute right-20 bottom-20 w-72 scale-x-[-1]'>
        <img src={kuromiNaJanela} alt='' />
      </section>
      <section className='absolute bottom-30 flex flex-col items-center justify-center gap-2 text-2xl duration-200 ease-in-out hover:scale-110'>
        <NavLink to='/'>
          <img src={arrow2} alt='' className='w-20 cursor-pointer' />
        </NavLink>
        <p>Voltar</p>
      </section>
    </div>
  );
}

export default TempoDesde;
