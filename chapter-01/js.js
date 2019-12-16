(function(){
    function Calc(xInput, yInput, output){
        this.xInput = xInput;
        this.yInput = yInput;
        this.output = output;
    }

    Calc.xName = 'xInput';
    Calc.yName = 'yInput';

    Calc.prototype = {
        render: function(result){
            this.output.innerText = String(result);
        }        
    };

    function CalcValue(calc, x, y){
        this.calc = calc;
        this.x = x;
        this.y = y;
        this.result = x + y;
    }

    CalcValue.prototype = {
        copyWith: function(name, value){
            var number = parseFloat(value);

            if(isNaN(number) || !isFinite(number))
                return this;

            if(name === Calc.xName)
                return new CalcValue(this.calc, number, this.y);

            if(name === Calc.yName)
                return new CalcValue(this.calc, this.x, number);

            return this;
        },
        render: function(){
            this.calc.render(this.result);
        }
    };

    function initCalc(elem){
        var calc = new Calc(
            elem.querySelector('input.calc-x-input'),
            elem.querySelector('input.calc-y-input'),
            elem.querySelector('span.calc-result')
        );

        var lastValues = new CalcValue(
            calc,
            parseFloat(calc.xInput.value),
            parseFloat(calc.yInput.value)
        );

        var handlerCalcEvent = function(e){
            var newValues = lastValues,
                elem = e.target;

            switch(elem){
                case calc.xInput:
                    newValues = lastValues.copyWith(Calc.xName, elem.value);
                    break;
                case calc.yInput:
                    newValues = lastValues.copyWith(Calc.yName, elem.value);
                    break; 
            }

            if(newValues !== lastValues){
                lastValues = newValues;
                lastValues.render();
            }
        };

        elem.addEventListener('keyup', handlerCalcEvent, false);

        return lastValues;
    }

    window.addEventListener('load', function(){
        var cv = initCalc(document.getElementById('myCalc'));
        cv.render();
    }, false);
}());