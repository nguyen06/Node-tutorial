module.exports = {
    checkWaivers: function(req, res, next){
        var cart = req.session.cart;
        if(!cart) return next();
        if(cart.some(function(i){
            return i.product.requireWaiver;
        })){
            if(!cart.warmings) cart.warmings = [];
            cart.warmings.push('One or more of your selected '+ 'tours requires a waiver.');
        }
        next();
    },
    checkGuestCounts: function(res, res, next){
        var cart = req.session.cart;
        if(!cart) return next();
        if(cart.some(function(item){
            return item.guests > item.product.maximumGuests;
        })){
            if(!cart.errors) cart.errors = [];
            cart.errors.push('One or more of your selected tours can not accomodate the number of guests you have selected.');
        }
        next();
    }
}