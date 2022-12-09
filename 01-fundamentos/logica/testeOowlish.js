class Container {
  constructor() {
    this._value = []
  }

  add(value) {
    const valueAdded = [];
    this._value.push(value)
    return this._value.sort()
  }  

  /**
   * Attempts to delete one item of the specified value from the container
   *
   * @param {number} value
   * @return {boolean} true, if the value has been deleted, or
   *                   false, otherwise.
   */
  delete(value) {
    const isValue = this._value.some((e) => e === value);

    if (!isValue) return false;
    
    this._value = this._value.filter((e) => e !== value);

    return true
  }

  /**
   * Finds the container's median integer value, which is
   * the middle integer when the all integers are sorted in order.
   * If the sorted array has an even length,
   * the leftmost integer between the two middle
   * integers should be considered as the median.
   *
   * @return {number} the median if the array is not empty, or
   * @throws {Error} a runtime exception, otherwise.
   */
  getMedian() {
    const middle = Math.floor(this._value.length / 2)

    if(this._value.length === 0) throw new Error("No inputs");
    if (this._value.length % 2 === 0) {
      return (this._value[middle - 1] + this._value[middle]) / 2;
    };  

    return this._value[middle];
  }

}

const container = new Container();
container.add(2)
container.add(4)
container.add(1)
container.add(6)
container.add(5)
container.add(8)
console.log(container._value)
console.log(container.getMedian())
console.log(container.delete(4))
console.log(container._value)
console.log(container.getMedian())
