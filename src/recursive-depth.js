module.exports = class DepthCalculator {
    count = 1; // Array.isArray(arr)
    calculateDepth(arr) {
        if(arr.length === 0) {
            return 1;
        }
        for(let i = 0; i < arr.length; i += 1) {
            if(i === arr.length - 1 && !Array.isArray(arr[i])) {
                return 1;
            }
            if(Array.isArray(arr[i])) {
                console.log(arr[i]);
                return this.count + this.calculateDepth(arr[i]);
            }
        }
    }
};