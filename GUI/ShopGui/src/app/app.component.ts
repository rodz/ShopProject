import { Component } from '@angular/core';

import { Produto } from './Produto/produto';
import { ProdutoService } from './Produto/produto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private produtoService: ProdutoService) {}

  produtoAtual: Produto = new Produto();
  listaProdutos: Produto[];

  criarProduto(a: Produto): void {
           this.listaProdutos.push(a);
           this.produtoAtual = new Produto;
  }
}
