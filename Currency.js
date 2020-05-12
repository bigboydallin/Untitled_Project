class Currency {

  // represents a Currency

  constructor(name, max) {
    this._name = name;
    this._max = max;
    this._count = 0;
    this._created = 0;
  }

  get name() {
    return this._name;
  }

  get ratio() {
    return this._created / this._max;
  }

  get count() {
    return this._count;
  }

  set count(amount) {
    this._count = amount;
    this._created = amount;
  }

  get created(){
    return this._created
  }

  get max() {
    return this._max
  }

  increment(amount) {
    if (amount > 0 && amount + this._count <= this._max) {
      this._count += amount;
      if (this._created+amount <= this._max){
        this._created += amount;
      }
      return true;
    }
    return false;
  }

  decrement(amount) {
    if (amount > 0 && (this.count - amount) >= 0) {
      this._count -= amount;
      return true;
    }
  }

  spend(amount) {
    if (amount > 0 && this._count - amount >= 0) {
      this._count -= amount;
      this._created -= amount;
      gameState.currencys[0].increment(amount*2**this._name)
      return true;
    }
    return false;
  }

}
