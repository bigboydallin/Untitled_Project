class Converter {

  constructor(id,rate){
    this.id = id;
    this.rate = rate;
    this.power = 0;
    this.modifier = 2;
  }

  allocate(amount){
    this.power += amount;
  }

  deallocate(amount){
    if (amount <= this.power){
      this.power -= amount;
      return amount;
    }
    let newAmount = this.power
    this.power = 0;
    return newAmount;
  }

  convert(){
    if (gameState.frame % this.rate === 0){
      for (let i = 0;i<Math.floor(this.modifier*this.power);i++){
        if (gameState.currencys[this.id].decrement(2)){
          gameState.currencys[this.id+1].increment(1);
        }
      }
    }
  }

}
