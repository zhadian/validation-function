String.prototype.Validate = function (condition) {
    condition = condition.replaceAll(' ', '');
    const string = this.valueOf("String")
    const isNot = condition.slice(0, 1) === '!';
    condition = isNot ? condition.slice(1, condition.length) : condition;
    const hasEmpty = condition.includes('empty');
    const hasLength = condition.includes('length');
    const comparisonOperators = ["===", "!==", "!=", ">=", "<=", ">", "<", "==",]

    let result = false;

    if (hasEmpty) {
        string?.trim().length === 0
    } else if (hasLength) {
        //if the secutity is not an issue we can just add the line below:
        // result = eval("'" + string + "'." + condition)

        // but for securty issues I prefer to parse the conditon and create condition from its parsed items. something like this: 

        let operator, index;
        for (let i = 0; i < comparisonOperators.length; i++) {
            if (condition.includes(comparisonOperators[i])) {
                operator = comparisonOperators[i]
                index = condition.indexOf(comparisonOperators[i])
                break;
            }
        }
        const num = condition.slice(index + operator.length, condition.length)
        result = eval(string.length + operator + num)
    } else {
        condition = condition.split("/")
        const matcher = new RegExp(condition[1], condition[2]);
        result = matcher.test(string);
    }
    return isNot ? !result : result
};

console.log('asdfadsfadsf-s'.Validate('empty'))//false
console.log('asdfadsfadsf-s'.Validate('! empty'))//true
console.log('asdfadsfadsf-s'.Validate('length>30'))///false
console.log('asdfadsfadsf-s'.Validate('length ! = = 0'))// true
console.log('asdfadsfadsf-s'.Validate('!length === 5'))//true
console.log('asdfadsfadsf-s'.Validate('length >= 5'))//true
console.log('asdfadsfadsf-s'.Validate('!length < 6'))// ture
console.log('asdfadsfadsf-s'.Validate('length <= 15'))// ture
console.log('asdfadsfadsf-s'.Validate('!length == 6'))// ture
console.log('asdfadsfadsf-s'.Validate('!length !== 6'))// ture
console.log('asdfadsfadsf-s'.Validate('/^.*-s/i'))// ture
console.log('asdfadsfadsf'.Validate('/^.*-s/i'))// false



