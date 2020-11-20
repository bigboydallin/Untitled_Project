class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
  }

  preload() {

  }

  create() {
    gameState.max = 2**(gameState.layers-1);
    for (let i = 0; i < gameState.layers; i++) {
      //create currencys
      gameState.currencys.push(new Currency(i, gameState.max / (2 ** i)));
      //create converters
      gameState.converters.push(new Converter(i,Math.floor(2.5**i)));
      //create text displays
      gameState.displays.push(this.add.text(20, i * 40, i + ": 0"));
      // create star visuals
      let circle = this.add.ellipse(900, 450, 500,500,0xffffff - ((i+1)*0x000fff))
      gameState.stars.push(new Star(circle));
      gameState.stars.star()
    }
    gameState.displays.push(this.add.text(20, 800,"Power:"));
    gameState.currencys[0].count = gameState.max;
    gameState.power = new Power;
  }

  update() {
    gameState.frame += 1;
    for (let i = 0; i < gameState.layers; i++) {
      if (i < gameState.layers-1){
        if (gameState.currencys[i+1].ratio === 1){
          gameState.power.deallocate(1,gameState.converters[i]);
        } else {
          gameState.power.allocate(1,gameState.converters[i]);
        }
        gameState.converters[i].convert()
      }
      //update text dispays and star sizes
      gameState.displays[i].setText(i + ': ' + gameState.currencys[i].count + '/ ' + gameState.currencys[i].created + ' / ' + gameState.currencys[i].max + ' / ' +gameState.converters[i].power);
      gameState.stars[i].scaleStar(gameState.currencys[i]);
      gameState.stars[i].star.x = game.canvas.width/2
      gameState.stars[i].star.y = game.canvas.height/2
    }
    gameState.power.setPower();
    gameState.displays[gameState.layers].setText("Power :"+gameState.power.unallocated + " / " + gameState.power.max);
  }
}
