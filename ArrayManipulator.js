class ArrayManipulator {
  bogusArr = [];

  constructor() {}

  addItem(bogusItem) {
    this.bogusArr.push(bogusItem);
  }

  getBogusArrSize() {
    return this.bogusArr.length;
  }
}

module.exports = ArrayManipulator;
