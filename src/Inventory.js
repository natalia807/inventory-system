class Inventory {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    findByName(name) {
    return this.products.find(
        product => product.name === name
    );
    }

    removeProduct(product){
        this.products.pop(product);
    }

    getAllProducts() {
        return this.products;
    }

}

module.exports = Inventory;