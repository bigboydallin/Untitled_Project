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
      gameState.currencys.push(new Currency(i, gameState.max / (2 ** i)));
      gameState.displays.push(this.add.text(20, i * 40, i + ": 0"));
      gameState.stars.push(this.add.ellipse(500, 400, 400, 400, gameState.colors[i]));
    }
    gameState.currencys[0].count = gameState.max;
  }

  update() {
    gameState.frame += 1;
    for (let i = 0; i < gameState.layers; i++) {
      gameState.displays[i].setText(i + ': ' + gameState.currencys[i].count + '/ ' + gameState.currencys[i].created + ' / ' + gameState.currencys[i].max);
      gameState.stars[i].setScale(gameState.currencys[i].ratio, gameState.currencys[i].ratio);
    }
    for (let i = 0; i < gameState.layers - 1; i++) {
      if (gameState.frame % (3**i) === 0) {
        if(gameState.currencys[i].decrement(2)){
          gameState.currencys[i + 1].increment(1);
        };

      }
    }

    if (gameState.frame % 600 === 0){
      gameState.currencys[1].spend(300);
      console.log('spent');
    }
  }
}
