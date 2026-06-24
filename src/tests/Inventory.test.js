const Inventory = require('../Inventory');
const Product = require('../Product');

//Primeiro teste
describe('Inventory', () => {

    test('deve armazenar um produto', () => {

        const inventory = new Inventory();

        const product = new Product(
            'Notebook',
            3500,
            10,
            2
        );

        inventory.addProduct(product);

        expect(inventory.products.length).toBe(1);
    });

    test('deve achar o produto pelo nome', () => {

    const inventory = new Inventory();

    const product = new Product(
        'Notebook',
        3500,
        10,
        2
    );

    inventory.addProduct(product);

    const foundProduct =
        inventory.findByName('Notebook');

    expect(foundProduct.name)
        .toBe('Notebook');
});

test('deve retornar undefined quando o produto não existe', () => {

    const inventory = new Inventory();

    const foundProduct =
        inventory.findByName('Mouse');

    expect(foundProduct)
        .toBeUndefined();
});

test('deve remover um produto', () => {

    const inventory = new Inventory();

    const product = new Product(
        'Notebook',
        3500,
        10,
        2
    );

    inventory.addProduct(product);

    inventory.removeProduct('Notebook');

    expect(inventory.products.length)
        .toBe(0);
});

test('deve impedir produtos duplicados', () => {

    const inventory = new Inventory();

    const product1 = new Product(
        'Notebook',
        3500,
        10,
        2
    );

    const product2 = new Product(
        'Notebook',
        4000,
        5,
        1
    );

    inventory.addProduct(product1);

    expect(() => {
        inventory.addProduct(product2);
    }).toThrow();
});

test('deve listar todos os produtos', () => {

    const inventory = new Inventory();

    inventory.addProduct(
        new Product('Notebook', 3500, 10, 2)
    );

    inventory.addProduct(
        new Product('Mouse', 100, 20, 5)
    );

    expect(
        inventory.getAllProducts().length
    ).toBe(2);
});

});