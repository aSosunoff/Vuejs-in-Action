function isNotNumericValue(value){
    return isNaN(value) || !isFinite(value);
}

var calc = new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0,
        lastResult: 0
    },
    computed: {
        result: function(){
            let x = parseFloat(this.x);
            if(isNotNumericValue(x))
                return this.lastResult;

            let y = parseFloat(this.y);
            if(isNotNumericValue(y))
                return this.lastResult;

            this.lastResult = x + y;

            return this.lastResult;
        }
    }
});