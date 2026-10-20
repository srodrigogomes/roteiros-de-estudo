import Link from 'next/link';
import { notFound } from 'next/navigation';
import roteiros from '../../../data/roteiros.json';
import professores from '../../../data/professores.json';
import AvisoIA from '../../../components/AvisoIA';
import Questao from '../../../components/Questao';
import TextoApoio from '../../../components/TextoApoio';

// Só existem as páginas dos ids que estão no JSON
export const dynamicParams = false;

// Diz ao Next quais páginas gerar no build estático (uma para cada roteiro)
export function generateStaticParams() {
  return roteiros.map((roteiro) => ({ id: roteiro.id }));
}

export default function PaginaRoteiro({ params }) {
  // Procura o roteiro pelo id que veio do endereço
  const roteiro = roteiros.find((r) => r.id === params.id);

  // Se não achou, mostra a página "não encontrado"
  if (!roteiro) {
    notFound();
  }

  // Procura o professor que revisou esse roteiro
  const professor = professores.find((p) => p.id === roteiro.professorId);

  return (
    <div>
      <Link href="/">← Voltar para a lista</Link>
      <h1>{roteiro.titulo}</h1>
      <p className="info">
        {roteiro.disciplina} | {roteiro.ano}º ano | Tema: {roteiro.tema} | {roteiro.tempoMinutos} min de estudo
      </p>

      <AvisoIA professor={professor} />

      <h2>Explicação</h2>
      <p>{roteiro.explicacao}</p>

      <h2>Questões de fixação</h2>
      {roteiro.questoes.map((questao, indice) => (
        <Questao key={indice} numero={indice + 1} questao={questao} />
      ))}

      <h2>Texto de apoio</h2>
      <TextoApoio termo={roteiro.termoWikipedia} />
    </div>
  );
}
