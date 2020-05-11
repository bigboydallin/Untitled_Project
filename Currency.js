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

  get max(){
    return this._max
  }

  increment(amount) {
    if (amount>0 && amount+this._count <= this._max){
      this._count += amount;
    } else {
      console.log("error incrementing")
    }
  }

  decrement(amount) {
    if (amount>0 && amount-this._count >= 0){
      this._count -= amount;
    }
  }
}
