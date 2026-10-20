import Link from 'next/link';

// Mostra um roteiro na lista. Os dados chegam pela prop "roteiro"
export default function CartaoRoteiro({ roteiro }) {
  return (
    <div className="cartao">
      <h2>{roteiro.titulo}</h2>
      <p className="info">
        {roteiro.disciplina} | {roteiro.ano}º ano | {roteiro.tempoMinutos} min
      </p>
      <p>Tema: {roteiro.tema}</p>
      <Link href={'/roteiros/' + roteiro.id + '/'}>Ver roteiro</Link>
    </div>
  );
}
