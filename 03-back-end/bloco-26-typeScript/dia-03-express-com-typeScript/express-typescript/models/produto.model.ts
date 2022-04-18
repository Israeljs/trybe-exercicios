import { Pool, ResultSetHeader } from 'mysql2/promise';
import Produto from '../interfaces/produto.interface';

export default class ProdutoModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Produto[]> {
    const result = await this.connection
      .execute('SELECT * FROM produtos');
    const [rows] = result;
    return rows as Produto[];
  }

  public async create(produto: Produto): Promise<Produto> {
    const { nome, preco, vencimento } = produto;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO produtos (nome, preco, vencimento) VALUES (?, ?, ?)',
      [nome, preco, vencimento],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...produto };
  }
}