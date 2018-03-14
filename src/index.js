class SmartCalculator {
    constructor(initialValue) {
        this.initialValue = initialValue;
        Number.prototype.tempArr = [];
        Number.prototype.initialValue = initialValue;
    }

    add(number) {
        return this.initialValue.add(number);
    }

    subtract(number) {
        return this.initialValue.subtract(number);
    }

    multiply(number) {
        return this.initialValue.multiply(number) ;
    }

    devide(number) {
        return this.initialValue.devide(number);
    }

    pow(number) {
        return this.initialValue.pow(number);
    }

}

Number.prototype.tempArr = [];
Number.prototype.add = function(number){

    let tepmArr = this.check(number, "+");
    this.initialValue = this.countExpression(tepmArr);
    return this.initialValue;
};

Number.prototype.subtract = function(number){
    let tepmArr = this.check(number, "-");
    this.initialValue = this.countExpression(tepmArr);
    return this.initialValue;
};

Number.prototype.multiply = function(number){
    let tepmArr = this.check(number, "*");
    this.initialValue = this.countExpression(tepmArr);
    return this.initialValue;
};

Number.prototype.devide = function(number){
    let tepmArr = this.check(number, "/");
    this.initialValue = this.countExpression(tepmArr);
    return this.initialValue;
};

Number.prototype.pow = function(number){
    let tepmArr = this.check(number, "^");
    this.initialValue = this.countExpression(tepmArr);
    return this.initialValue;
};

Number.prototype.check = function check(num, sign){

    let tempArr = Number.prototype.tempArr;
    if(tempArr.length === 0){
        tempArr[0] = Number.prototype.initialValue;
        tempArr[1] = sign;
        tempArr[2] = num;
    }else{
        tempArr.push(sign, num);
    }
    return tempArr;
};

Number.prototype.countExpression = function countExpression(arr){
    let length = arr.length;
    let strForCount = arr.join('');
    if(/\^/g.test(strForCount)){
        for(let i = length - 1; i >= 0 ; i--){
            if(arr[i] === "^"){
                let tempRes = Math.pow(arr[i - 1], arr[i+1]);
                arr.splice(i - 1, 3, tempRes);
            }else{
                continue;
            }
        }
    }
    strForCount = arr.join('');
    let res = eval(strForCount);
    return res;
};

module.exports = SmartCalculator;
