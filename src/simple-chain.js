const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || !Number.isInteger(position)) {
      this.arr = [];
      throw new Error('Error');
    }
    if(position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error('Error');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let array = this.arr.slice();
    this.arr = [];
    return array.join('~~');
  }
};

module.exports = chainMaker;
