module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = arr.filter((n) => Array.isArray(n));
        let r;
        const array = [];
        console.log('*', arr, '**', result, '***',r);
        if(result.length === 0) {
            return 1;
        } else {
            if(result.length > 1) {
                
                for(let i = 0; i < result.length; i += 1) {
                    console.log('---before--',r);
                    r = this.calculateDepth([result[i]]);
                    array.push(r);
                    console.log('---after--',r, 'array', array);
                    if(i === result.length - 1) {
                        return Math.max(...array);
                    }
                }
                
            }
            console.log('result before:', result);
            let sum = 1 + this.calculateDepth(result[0]);
            console.log('result[0]:', result[0], 'sum:', sum, '-----',r);
            return sum;
        }
    }
};