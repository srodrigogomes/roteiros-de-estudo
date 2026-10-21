'use client';
import { useState } from 'react';

// Uma questão de fixação, com botão para mostrar ou esconder a resposta
export default function Questao({ numero, questao }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="caixa">
      <p><strong>{numero}.</strong> {questao.pergunta}</p>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder resposta' : 'Mostrar resposta'}
      </button>
      {mostrar && <p className="resposta">{questao.resposta}</p>}
    </div>
  );
}
