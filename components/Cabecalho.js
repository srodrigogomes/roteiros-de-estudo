import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <strong>Roteiros de Estudo</strong>
      <nav>
        <Link href="/">Roteiros</Link>
        <Link href="/pedido">Pedir roteiro</Link>
      </nav>
    </header>
  );
}
