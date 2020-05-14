const gameState = {
  layers: 5,
  currencys: [],
  max: 2**13,
  displays: [],
  stars: [],
  colors: [0xffffff, 0xff0000, 0x00ff00, 0x0000ff, 0xffff00],
  frame: 0,
  converters: []
}

const config = {
  type: Phaser.AUTO,
  width: 1800,
  height: 900,
  backgroundColor: '000000',
  scene: [GameScene]
};

const game = new Phaser.Game(config);
