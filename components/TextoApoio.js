'use client';
import { useState, useEffect } from 'react';

// Busca um resumo na Wikipédia. Tem 3 estados: carregando, erro e sucesso.
// Se der erro, só esta caixa mostra a mensagem; o resto do roteiro continua normal.
export default function TextoApoio({ termo }) {
  const [estado, setEstado] = useState('carregando');
  const [texto, setTexto] = useState('');
  const [link, setLink] = useState('');

  // useEffect roda a busca quando o componente aparece na tela
  useEffect(() => {
    async function buscar() {
      try {
        const endereco = 'https://pt.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(termo);
        const resposta = await fetch(endereco);

        // Se a Wikipédia respondeu com erro (ex.: página não existe), cai no catch
        if (!resposta.ok) {
          throw new Error('Resposta com erro');
        }

        const dados = await resposta.json();
        setTexto(dados.extract);
        setLink(dados.content_urls.desktop.page);
        setEstado('sucesso');
      } catch (erro) {
        setEstado('erro');
      }
    }

    buscar();
  }, [termo]);

  if (estado === 'carregando') {
    return <p>Carregando texto de apoio...</p>;
  }

  if (estado === 'erro') {
    return <p className="erro">Não foi possível carregar o texto de apoio agora. O roteiro continua disponível acima.</p>;
  }

  return (
    <div className="caixa">
      <p>{texto}</p>
      <p className="info">
        Fonte: <a href={link} target="_blank" rel="noreferrer">Wikipédia</a>
      </p>
    </div>
  );
}
