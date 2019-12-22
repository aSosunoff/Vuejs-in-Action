var webstore = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue.js',
        product: {
            id: 1001,
            title: "Produc Title",
            description: "qweqweqweqweqwe qweqweqwe",
            price: 2000,
            img: "1.jpg"
        },
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