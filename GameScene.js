class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
  }

  preload() {

  }

  create() {
    gameState.circle = this.add.ellipse(400, 400,200,100,0xffffff);
  }

  update() {
    gameState.circle.setSize(300,350);
    console.log(gameState.circle.getData());
  }
}
