//https://stackoverflow.com/questions/42156059/vuejs-2-send-event-from-component-to-parent
// var bus = new Vue();

var webstore = new Vue({
    el: '#app',
    data: {
        product: {
            id: 1001,
            title: "Produc Title",
            description: "qweqweqweqweqwe qweqweqwe",
            price: 2000,
            img: "1.jpg",
            availableInvectory: 10,
            rating: 3
        },
        cart: [],
        
        showProduct: true,

        order: {
            name: "",
            surname: "",
            address: "",
            city: "",
            zip: null,
            
            state: "",
            statesValue: {
                1: 'Нижегородская',
                2: 'Владимирская',
                3: 'Московская',
                4: 'Архангельская',
            },

            gift: 'Не отправлять как подарок',
            giftValue: {
                sendGift: 'Отправить как подарок',
                dontSendGift: 'Не отправлять как подарок',
            },

            method: "Домашний адрес",
            methodValue: {
                home: "Домашний адрес",
                business: "Рабочий адрес"
            }
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
    methods: {
        addToCart() {
            this.cart.push(this.product.id);
        },
        showCheckout(isShow){
            this.showProduct = isShow;
        },
        submitForm(){
            alert('Заказ');
        },
    },
    computed: {
        cartItemCount() {
            return this.cart.length || ''; 
        },
        countAvailable(){
            return this.product.availableInvectory - this.cartItemCount;
        },
        canAddToCart(){
            return this.product.availableInvectory > this.cartItemCount;
        },
        hasProductToCart(){
            return this.cartItemCount > 0;
        },
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