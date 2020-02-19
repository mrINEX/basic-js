module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Not implemented';
    }

    let array = arr.slice()

    for(let i = 0; i < array.length; i += 1) {
        if(array[i] === '--double-prev') {
            // console.log(i, array[i], array.length, array);
            if(i - 1 >= 0) {
                array.splice(i, 1, array[i - 1]);
            } else {
                array.splice(i, 1);
            }
            i = -1;
        }
    }

    for(let i = 0; i < array.length; i += 1) {
        if(array[i] === '--double-next') {
            // console.log(i, array[i], array.length, array);
            if (i + 1 < array.length) {
                array.splice(i, 1, array[i + 1]);
            } else {
                array.splice(i, 1);
            }
            i = -1;
        }
    }

    for(let i = 0; i < array.length; i += 1) {
        if(array[i] === '--discard-next') { // delete
            // console.log(i, array[i], array.length, array);
            if(i + 1 < array.length) {
                array.splice(i + 1, 1);
            }
            array.splice(i, 1);
            i = -1;
        }
    }

    for(let i = 0; i < array.length; i += 1) {
        if(array[i] === '--discard-prev') { // delete
            // console.log(i, array[i], array.length, array);
            if(i - 1 >= 0) {
                array.splice(i - 1, 1);
                array.splice(i - 1, 1);
            } else {
                array.splice(i, 1);
            }
            i = -1;
        }
    }
    
    return array;
};
