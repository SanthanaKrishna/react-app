
class Sample {
    variable1;
    variable2;
    constructor() {
        this.variable1 = 123;
        this.variable2 = 'abc';
    }
    getVariables = () => {
        return [
            this.variable1,
            this.variable2
        ]
    }
}

window.sample = new Sample();