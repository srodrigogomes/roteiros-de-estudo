import FormularioPedido from '../../components/FormularioPedido';

export default function PaginaPedido() {
  return (
    <div>
      <h1>Pedir um novo roteiro</h1>
      <p>Preencha os dados abaixo. Por enquanto o pedido não é enviado para lugar nenhum.</p>
      <FormularioPedido />
    </div>
  );
}
