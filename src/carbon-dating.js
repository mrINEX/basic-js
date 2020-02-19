const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity === 'string'){

    let a = sampleActivity;
    a = a.split('')
    let count = 0;
    for(let i = 0; i < a.length; i += 1) {
      if(a[i] === '.' && count === 0) {
          count += 1;
        }
        else if(a[i] === '.') {
          a[i] = '';
        }
    }
    let n = Number(a.join(''));

    if(typeof n === 'number' && !Number.isNaN(n)) {
      if(n < 1 || n > 15) {
        return false;
      }

      let inf = Math.log(MODERN_ACTIVITY / n);
      let infff = 0.693 / HALF_LIFE_PERIOD;
      return Math.ceil(inf / infff);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
