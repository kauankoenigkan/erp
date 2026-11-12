import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header class="topbar">
      <strong>ERP Estoque</strong>
      <span>Produto e atendimento de qualidade</span>
    </header>

    <main class="container">
      <h1>Painel inicial</h1>
      <p>Bem-vindo ao sistema de gestão de estoque e vendas.</p>

      <section class="cards">
        <article class="card">
          <h2>Produtos</h2>
          <p>O cadastro de produtos será implementado em breve.</p>
        </article>

        <article class="card">
          <h2>Estoque</h2>
          <p>O controle de estoque será implementado em breve.</p>
        </article>

        <article class="card">
          <h2>Vendas</h2>
          <p>O registro de vendas será implementado em breve.</p>
        </article>
      </section>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      color: #1f2937;
      background: #f3f4f6;
      font-family: Arial, sans-serif;
    }

    .topbar {
      display: flex;
      justify-content: space-between;
      padding: 18px 8%;
      color: white;
      background: #1f4e79;
    }

    .container {
      max-width: 1000px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 24px;
    }

    .card {
      padding: 20px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      background: white;
    }

    .card h2 {
      margin-top: 0;
    }
  `]
})
export class App {}