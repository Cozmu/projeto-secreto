import { useEffect, useState, type ReactElement } from 'react';

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

  useEffect(() => {
    const intervalo: number = setInterval(() => {
      setTempo(calcularTempoDesde(dataInicial));
    }, 1000);

    return (): void => clearInterval(intervalo);
  }, [dataInicial]);

  return (
    <div className='font-pacifico flex h-screen w-full flex-col items-center justify-center text-3xl'>
      <section>
        <img src='' alt='' />
        <h1 className=''>TODO ESSE TEMPÃO SENDO FELIZ AO SEU LADO (๑•̀ㅁ•́๑)✧</h1>
      </section>
      <p>Já se passaram:</p>
      <p>
        {tempo.dias} dias, {tempo.horas.toString().padStart(2, '0')}:
        {tempo.minutos.toString().padStart(2, '0')}:
        {tempo.segundos.toString().padStart(2, '0')}
      </p>
    </div>
  );
}

export default TempoDesde;
