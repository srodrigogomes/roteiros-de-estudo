import roteiros from '../data/roteiros.json';
import ListaRoteiros from '../components/ListaRoteiros';

// Página inicial: título + lista de roteiros com filtros
export default function Home() {
  return (
    <div>
      <h1>Roteiros de Estudo</h1>
      <p>Material gerado por inteligência artificial e revisado por professores da rede municipal.</p>
      <ListaRoteiros roteiros={roteiros} />
    </div>
  );
}
