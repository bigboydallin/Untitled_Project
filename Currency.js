class Currency {

  // represents a Currency

  constructor(name, max) {
    this._name = name;
    this._max = max;
    this._count = 0;
  }

  get name() {
    return this._name;
  }

  get ratio() {
    return this._count / this._max;
  }

  get count() {
    return this._count;
  }

  set count(amount) {
    this._count = amount;
  }

  increment(amount) {
    if (amount>0 && amount+this._count < this.max){
      this._count += amount;
    }
  }

  decrement(amount) {
    if (amount>0 && amount-this._count >= 0){
      this._count -= amount;
    }
  }
}
