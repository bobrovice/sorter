class Sorter {
  constructor() {
    this.array = []
  }

  add(element) {
    this.array.push(element)
  }

  at(index) {
    return this.array[index]
  }

  get length() {
    return this.array.length
  }

  toArray() {
    return this.array
  }

  sort(indices) {
    let newArr = indices.sort().map(i => this.array[i]).sort(this.comp || ((left, right) => left - right))
    indices.forEach((i, indices) => this.array[i] = newArr[indices])
}

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;