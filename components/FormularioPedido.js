'use client';
import { useState } from 'react';
import Campo from './Campo';

const DISCIPLINAS = ['Matemática', 'Português', 'Ciências', 'História', 'Geografia'];
const ANOS = ['6', '7', '8', '9'];
const FINAL_EMAIL = '@escola.educa.gov.br';

const VALORES_INICIAIS = {
  nome: '', email: '', disciplina: '', ano: '', tema: '', questoes: '', data: '',
};

// Confere cada campo e devolve um objeto com as mensagens de erro (vazio = tudo certo)
function validar(v) {
  const erros = {};

  if (v.nome.trim() === '') {
    erros.nome = 'Informe o nome.';
  }

  const email = v.email.trim().toLowerCase();
  if (!email.endsWith(FINAL_EMAIL) || email.length === FINAL_EMAIL.length) {
    erros.email = 'Use o e-mail institucional, que termina em ' + FINAL_EMAIL;
  }

  if (v.disciplina === '') {
    erros.disciplina = 'Escolha a disciplina.';
  }

  if (v.ano === '') {
    erros.ano = 'Escolha o ano.';
  }

  if (v.tema.trim() === '') {
    erros.tema = 'Informe o tema.';
  }

  const qtd = Number(v.questoes);
  if (v.questoes === '' || !Number.isInteger(qtd) || qtd < 3 || qtd > 10) {
    erros.questoes = 'Informe um número inteiro de 3 a 10.';
  }

  // A data de uso precisa ser daqui a 7 dias ou mais
  if (v.data === '') {
    erros.data = 'Informe a data em que pretende usar o material.';
  } else {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const minima = new Date(hoje);
    minima.setDate(hoje.getDate() + 7);
    const escolhida = new Date(v.data + 'T00:00:00');
    if (escolhida < minima) {
      erros.data = 'A data deve ter pelo menos 7 dias de antecedência.';
    }
  }

  return erros;
}

export default function FormularioPedido() {
  const [valores, setValores] = useState(VALORES_INICIAIS);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  // Toda vez que o usuário digita, atualiza o campo que mudou (formulário controlado)
  function mudar(e) {
    setValores({ ...valores, [e.target.name]: e.target.value });
  }

  function enviar(e) {
    e.preventDefault(); // evita recarregar a página
    const novosErros = validar(valores);
    setErros(novosErros);

    // Se não há nenhum erro, mostra a confirmação (nada é enviado a servidor)
    if (Object.keys(novosErros).length === 0) {
      setEnviado(true);
    }
  }

  function novoPedido() {
    setValores(VALORES_INICIAIS);
    setErros({});
    setEnviado(false);
  }

  if (enviado) {
    return (
      <div className="sucesso">
        <p><strong>Pedido registrado!</strong></p>
        <p>
          Roteiro de {valores.disciplina} para o {valores.ano}º ano sobre "{valores.tema}", com {valores.questoes} questões,
          para usar em {valores.data}. (Nenhum dado foi enviado.)
        </p>
        <button onClick={novoPedido}>Fazer outro pedido</button>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate>
      <Campo rotulo="Nome" erro={erros.nome}>
        <input name="nome" value={valores.nome} onChange={mudar} />
      </Campo>

      <Campo rotulo="E-mail institucional" erro={erros.email}>
        <input name="email" value={valores.email} onChange={mudar} placeholder="nome@escola.educa.gov.br" />
      </Campo>

      <Campo rotulo="Disciplina" erro={erros.disciplina}>
        <select name="disciplina" value={valores.disciplina} onChange={mudar}>
          <option value="">Escolha...</option>
          {DISCIPLINAS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </Campo>

      <Campo rotulo="Ano" erro={erros.ano}>
        <select name="ano" value={valores.ano} onChange={mudar}>
          <option value="">Escolha...</option>
          {ANOS.map((a) => (
            <option key={a} value={a}>{a}º ano</option>
          ))}
        </select>
      </Campo>

      <Campo rotulo="Tema" erro={erros.tema}>
        <input name="tema" value={valores.tema} onChange={mudar} />
      </Campo>

      <Campo rotulo="Quantidade de questões (3 a 10)" erro={erros.questoes}>
        <input name="questoes" type="number" value={valores.questoes} onChange={mudar} />
      </Campo>

      <Campo rotulo="Data em que pretende usar (mínimo 7 dias de antecedência)" erro={erros.data}>
        <input name="data" type="date" value={valores.data} onChange={mudar} />
      </Campo>

      <button type="submit">Enviar pedido</button>
    </form>
  );
}
