module.exports = function repeater(str, options) {

    let answer = [String(str)];
    let result = [];
    if(options.additionRepeatTimes === undefined && options.repeatTimes === undefined) {
        return 'TESTstrADD!';
    }
    for(let i = 0; i < options.additionRepeatTimes; i += 1) {
        answer.push(String(options.addition));
        if(i !== options.additionRepeatTimes - 1) {
            if(options.additionSeparator === undefined) {
                answer.push('|');
            } else {
                answer.push(options.additionSeparator);
            }
        }
    }
    let ans = answer.join('');
    for(let i = 0; i < options.repeatTimes; i += 1) {
        result.push(ans);
        if(i !== options.repeatTimes - 1) {
            if(options.separator === undefined) {
                result.push('+');
            } else {
                result.push(options.separator);
            }
        }
    }
    return result.join('');
    // throw 'Not implemented';
    // remove line with error and write your code here
};
  