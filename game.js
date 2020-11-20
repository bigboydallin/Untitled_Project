const gameState = {
  layers: 14,
  currencys: [],
  displays: [],
  stars: [],
  colors: [0xffffff, 0xff0000, 0x00ff00, 0x0000ff, 0xffff00],
  frame: 0,
  converters: []
}

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 1920,
    height: 1080
  },
  backgroundColor: '000000',
  scene: [GameScene]
};

const game = new Phaser.Game(config);
