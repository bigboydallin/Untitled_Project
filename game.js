const gameState = {
  score: 0
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  backgroundColor: '000000',
  scene: [GameScene]
};

const game = new Phaser.Game(config);
