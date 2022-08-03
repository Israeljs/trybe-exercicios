import Cliente from './cliente';
import PedidoItem from './pedidoItem';

export default class Pedido {
  _cliente: Cliente;

  _pedidoItem: PedidoItem;

  _pagamento: [string, string];

  _desconto: [number, number]

  constructor() {
    this._cliente = new Cliente();
    this._pedidoItem = new PedidoItem();
    this._pagamento = ["cartão", "dinheiro"];
    this._desconto = [0.1, 0.3];
  }
}