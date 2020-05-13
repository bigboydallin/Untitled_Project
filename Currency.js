class Currency {

  // represents a Currency

  constructor(id, max, name = "") {
    this._id = id;
    this._max = max;
    this.name = name;
    this._count = 0;
    this._created = 0;
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

  get visible(){
    return this._created > 0;
  }

  increment(amount) {
    //increases the count and created by amount
    if (amount > 0 && amount + this._count <= this._max) {
      this._count += amount;
      this._created += amount;
      return true;
    }
    return false;
  }

  cash(amount) {
    //increases count by amount
    if (amount>0){
      this._count += amount;
    }
  }

  decrement(amount) {
    //decreases count by amount
    if (amount > 0 && (this.count - amount) >= 0) {
      this._count -= amount;
      return true;
    }
    return false;
  }


  spend(amount,target) {
    //decreases count and created by amount and converts it to target
    if (this._id > target._id){
      if (amount > 0 && this._count - amount >= 0) {
        this._count -= amount;
        this._created -= amount;
        if (this._id-1 === target._id){
          gameState.currencys[this._id-1].cash(amount*2);
        } else {
          gameState.currencys[this._id-1].cash(amount*2);
          gameState.currencys[this._id-1].spend(amount*2,target);
        }
        return true;
      }
    }
    return false;
  }

}
