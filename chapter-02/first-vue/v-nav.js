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
            this.showProduct = this.showProduct ? false : true;
            this.$emit('show_checkout', this.showProduct);
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
            v-on:click="showCheckout">
            Корзина 
            <span class="badge badge-light"
                v-show="hasProductToCart">
                {{ cartItemCount }}
            </span>
          </button>
    </span>
</nav>`
});