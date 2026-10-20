import Link from 'next/link';

// Aparece quando o endereço não existe (por exemplo, um roteiro com id inexistente)
export default function NaoEncontrado() {
  return (
    <div>
      <h1>Roteiro não encontrado</h1>
      <p>Não existe nenhum roteiro neste endereço.</p>
      <Link href="/">Voltar para a lista de roteiros</Link>
    </div>
  );
}
