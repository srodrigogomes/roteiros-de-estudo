// Aviso de que o roteiro foi gerado por IA, com os dados do professor que revisou
export default function AvisoIA({ professor }) {
  return (
    <div className="aviso-ia">
      <strong>Este material foi gerado por inteligência artificial.</strong>
      <br />
      Revisado por: {professor.nome} | {professor.disciplina} | {professor.escola}
    </div>
  );
}
