const products = require('./products.js');
// console.log(products)


function searchProduct(name) {
    const product = products.find(item => item.name === name);

    if (product) {
        console.log(product);
    } else {
        console.log('Item doesn’t exist');
    }
}
searchProduct('pen');
searchProduct('chair');
searchProduct('table');