var webstore = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue.js',
        firstName: 'Alex',
        lastName: 'Flex',

        product: {
            id: 1001,
            title: "Produc Title",
            description: "qweqweqweqweqwe qweqweqwe",
            price: 2000,
            img: "1.jpg",
            availableInvectory: 5,
        },
        cart: [],
        
        showProduct: true,
    },
    filters: {
        formatPrice: function(price){
            if(!parseInt(price)) return "";
            if(price > 99999){
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split('').reverse();
                var index = 3;
                while(priceArray.length > index + 3){
                    priceArray.splice(index + 3, 0, ',');
                    index += 4;
                }
                return "$" + priceArray.reverse().join('');
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    },
    methods: {
        addToCart() {
            this.cart.push(this.product.id);
        },
        showCheckout(){
            this.showProduct = this.showProduct ? false : true;
        }
    },
    computed: {
        fullName() {
            return [this.firstName, this.lastName].join(' ');
        },
        cartItemCount() {
            return this.cart.length || ''; 
        },
        canAddToCart(){
            return this.product.availableInvectory > this.cartItemCount;
        },
        hasProductToCart(){
            return this.cartItemCount > 0;
        }
    },

    beforeCreate: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('beforeCreate');
    },
    created: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('created');
    },
    beforeMount: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('beforeMount');
    },
    mounted: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('mounted');
    },
    beforeUpdate: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('beforeUpdate');
    },
    updated: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('updated');
    },
    beforeDestroy: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('beforeDestroy');
    },
    destroyed: function(){
        if(APP_LOG_LIFECYCLE_EVENTS)
            console.log('destroyed');
    },
});