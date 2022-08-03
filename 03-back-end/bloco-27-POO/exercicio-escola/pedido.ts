import Cliente from './cliente';
import ItemPedido from './pedidoItem';

enum FormPagamento {
  Dinheiro = 'dinheiro',
  Cartao = 'cartão',
}

enum Desconto {
  Dez = 0.9,
  Trinta = 0.7,
}

export default class Pedido {
  _cliente: string;

  _pedido: string;

  _precoPedido: number;

  _pagamento?: FormPagamento;

  _desconto?: Desconto;

  constructor(
    // cliente = new Cliente('israel'), 
    Cliente: Cliente, 
    // item = new ItemPedido('gol1.0', 60000),
    ItemPedido: ItemPedido,
    pagamento?: FormPagamento,
    desconto?: Desconto
    ) {
    this._cliente = Cliente.nome;
    this._pedido = ItemPedido.nome;
    this._precoPedido = ItemPedido.preco;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  public sumPedido(): number {
    return this._precoPedido;
  }

  public pedidoComDesc(): number {
    if (!this._desconto) return this._precoPedido;
    const precoDesc = this._precoPedido * this._desconto;
    return precoDesc;
  }
}
