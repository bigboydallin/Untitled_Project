class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
  }

  preload() {

  }

  create() {

    for (let i = 0; i < gameState.layers; i++) {
      //create currencys
      gameState.currencys.push(new Currency(i, gameState.max / (2 ** i)));
      //create text displays
      gameState.displays.push(this.add.text(20, i * 40, i + ": 0"));
      // create star visuals
      let circle = this.add.ellipse(900, 450, 500,500,gameState.colors[i])
      gameState.stars.push(new Star(circle));
    }
    gameState.currencys[0].count = gameState.max;
  }

  update() {
    gameState.frame += 1;
    for (let i = 0; i < gameState.layers; i++) {
      //update text dispays and star sizes
      gameState.displays[i].setText(i + ': ' + gameState.currencys[i].count + '/ ' + gameState.currencys[i].created + ' / ' + gameState.currencys[i].max);
      gameState.stars[i].scaleStar(gameState.currencys[i]);
    }
    for (let i = 0; i < gameState.layers - 1; i++) {
      if (gameState.frame % (3**i) === 0) {
        //fuse by turning 2 lower tier into 1 higher tier
        if(gameState.currencys[i].decrement(2)){
          gameState.currencys[i + 1].increment(1);
        };

      }
    }

    if (gameState.frame % 600 === 0){
      console.log(gameState.currencys[3].spend(10,gameState.currencys[1]));
    }
  }
}
