module.exports = function(app)
{
    
    app.use('/',require('./home'));
    app.use('/categories',require('./categories'));
    app.use('/products/product_search',require('./product'));
    app.use('/products/',require('./product'));
    app.use('/order',require('./order'));
    app.use('/cart',require('./cart'));
    app.use('/order',require('./order'));
    app.use('/wishlist',require('./wishlist'));
    app.use('/auth',require('./auth'));

    
}