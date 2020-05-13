class Star {
  constructor(circle) {
    this.star = circle;
  }

  scaleStar (currency){
    this.star.setScale(currency.ratio,currency.ratio);
  }
}
