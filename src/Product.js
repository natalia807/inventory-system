class Product {

    constructor(name, price, stock) {

        if (price <= 0) {
            throw new Error('Preço inválido');
        }

        this.name = name;
        this.price = price;

        if(stock <= 0){
            throw new Error('Estoque inválido');
        }
        this.stock = stock;
    }

}

module.exports = Product;