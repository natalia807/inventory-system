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

});