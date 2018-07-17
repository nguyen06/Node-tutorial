module.exports = function(res, res, next){
    var cart = req.session.cart;
    if(!cart) return next();
    if(cart.some(function(item){
        return item.product.requireWaiver;
    })){
        if(!cart.warmings) cart.warnings = [];
        cart.warnings.push('One or more of your selected tours' + 'requires a waiver.');
    }
    next();
}