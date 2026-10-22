// Um campo do formulário: rótulo + o campo em si (children) + mensagem de erro
export default function Campo({ rotulo, erro, children }) {
  return (
    <div className="campo">
      <label>{rotulo}</label>
      {children}
      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}
