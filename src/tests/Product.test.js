const Product = require('../Product');

describe('Product', () => {
//Primeiro teste: Cria um produto, verifica se o atributo name contém "Notebook"
    test('deve criar um produto', () => {

        const product = new Product(
            'Notebook',
            3500,
            10,
            2
        );

        expect(product.name)
            .toBe('Notebook');
    });

    test('não deve permitir preço negativo', () => {

    expect(() => {

        new Product(
            'Notebook',
            -100,
            10,
            2
        );

    }).toThrow();

});

test('deve armazenar o estoque do produto', () => {

    const product = new Product(
        'Notebook',
        3500,
        10,
        2
    );

    expect(product.stock).toBe(10);

});
test('não deve permitir estoque negativo', () => {

    expect(() => {
        new Product(
            'Notebook',
            3500,
            -1,
            2
        );
    }).toThrow();

});


});