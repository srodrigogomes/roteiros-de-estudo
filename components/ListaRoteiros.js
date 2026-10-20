'use client';
import { useState } from 'react';
import CartaoRoteiro from './CartaoRoteiro';

// Lista de roteiros com filtro de disciplina e ano
export default function ListaRoteiros({ roteiros }) {
  // Estados: guardam o que o aluno escolheu nos filtros ('' = todos)
  const [disciplina, setDisciplina] = useState('');
  const [ano, setAno] = useState('');

  // Lista de disciplinas sem repetir, tirada dos próprios roteiros
  const disciplinas = [...new Set(roteiros.map((r) => r.disciplina))];

  // Fica só com os roteiros que combinam com os filtros
  const filtrados = roteiros.filter((r) => {
    const combinaDisciplina = disciplina === '' || r.disciplina === disciplina;
    const combinaAno = ano === '' || String(r.ano) === ano;
    return combinaDisciplina && combinaAno;
  });

  return (
    <div>
      <div className="filtros">
        <select value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
          <option value="">Todas as disciplinas</option>
          {disciplinas.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select value={ano} onChange={(e) => setAno(e.target.value)}>
          <option value="">Todos os anos</option>
          <option value="6">6º ano</option>
          <option value="7">7º ano</option>
          <option value="8">8º ano</option>
          <option value="9">9º ano</option>
        </select>
      </div>

      {filtrados.length === 0 && <p>Nenhum roteiro encontrado para esse filtro.</p>}

      {filtrados.map((roteiro) => (
        <CartaoRoteiro key={roteiro.id} roteiro={roteiro} />
      ))}
    </div>
  );
}
