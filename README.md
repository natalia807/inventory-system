# Inventory System

Projeto desenvolvido para prática de **TDD (Test-Driven Development)** utilizando **JavaScript**, **Node.js** e **Jest**.

## Objetivo

Implementar um sistema simples de controle de estoque seguindo o ciclo do TDD:

1. Escrever um teste.
2. Executar o teste e verificar a falha.
3. Implementar o mínimo necessário para o teste passar.
4. Refatorar quando necessário.
5. Repetir o processo para novas funcionalidades.

---

## Funcionalidades Implementadas

### Product

- Criar produto
- Validar preço maior que zero
- Validar estoque não negativo
- Adicionar estoque
- Remover estoque
- Verificar estoque baixo

### Inventory

- Adicionar produto ao estoque
- Buscar produto por nome
- Listar todos os produtos
- Remover produto
- Impedir produtos duplicados

---

## Estrutura do Projeto

```text
inventory-system/
│
├── src/
│   ├── Product.js
│   ├── Inventory.js
│   └── tests/
│       ├── Product.test.js
│       └── Inventory.test.js
│
├── package.json
└── README.md

Tecnologias Utilizadas
Node.js
JavaScript
Jest
Testes