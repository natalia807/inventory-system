const Product = require('../src/Product');

describe('Product', () => {

    test('should create a product', () => {

        const product = new Product(
            'Notebook',
            3500,
            10,
            2
        );

        expect(product.name)
            .toBe('Notebook');
    });

});