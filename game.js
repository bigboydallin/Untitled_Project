const gameState = {
  layers: 5,
  currencys: [],
  max: 100000,
  displays: []
}

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  backgroundColor: '000000',
  scene: [GameScene]
};

const game = new Phaser.Game(config);
