import './globals.css';
import Cabecalho from '../components/Cabecalho';

export const metadata = {
  title: 'Roteiros de Estudo',
  description: 'Roteiros de estudo para alunos do 6º ao 9º ano',
};

// O layout envolve todas as páginas: o Cabecalho aparece em todas elas
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        <main>{children}</main>
      </body>
    </html>
  );
}
