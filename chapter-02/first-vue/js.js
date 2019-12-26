//https://stackoverflow.com/questions/42156059/vuejs-2-send-event-from-component-to-parent
var bus = new Vue();

Vue.component('app-nav', {
    data(){
        return {
            sitename: 'Vue.js',
            firstName: 'Alex',
            lastName: 'Flex',
            showProduct: true,
        };
    },
    computed: {
        fullName() {
            return [this.firstName, this.lastName].join(' ');
        }
    },
    methods: {
        showCheckout(){
            bus.$emit('show_checkout', this.showProduct ? false : true);
        }
    },
    props: ['hasProductToCart', 'cartItemCount'],
    template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">{{ sitename }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
    </div>
    
    <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    <span class="navbar-text nav-link">{{ fullName }}</span>

    <span class="navbar-text nav-link">
        <button type="button" class="btn btn-primary"
            @click="showCheckout">
            Корзина 
            <span class="badge badge-light"
                v-show="hasProductToCart">
                {{ cartItemCount }}
            </span>
          </button>
    </span>
</nav>`
});


var webstore = new Vue({
    el: '#app',
    data: {
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
        showCheckout(isShow){
            this.showProduct = isShow;
        }
    },
    // created() {
    //     bus.$on('show_checkout', (isShow) => {
    //         this.showProduct = isShow;
    //     })
    // },
    computed: {
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