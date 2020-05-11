class GameScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'GameScene'
      })
    }

    preload() {

    }

    create() {
      gameState.circle = this.add.ellipse(500, 400, 100, 100, 0xffffff);
      for (let i = 0; i < gameState.layers; i++) {
        gameState.currencys.push(new Currency(i, gameState.max / (2 ** i)));
        gameState.displays.push(this.add.text(20, i * 40, i + ": 0"));
      }
      gameState.currencys[0].count = gameState.max;
    }

    update() {
        gameState.circle.setSize(300, 350);
        for (let i = 0; i < gameState.layers; i++) {
          gameState.displays[i].setText(i + ': ' + gameState.currencys[i].count);
    }
  }
}
