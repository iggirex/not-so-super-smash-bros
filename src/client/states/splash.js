function Splash() {}

Splash.prototype = {
    loadScripts: function () {
      game.load.script('game', 'states/game.js');
    },
    loadAssets: function () {
      // Map assets
      game.load.image('sky', 'assets/marioLevel/MarioLevelBackground.png');
      game.load.image('ground', 'assets/marioLevel/ground.png');
      game.load.image('move-box', 'assets/marioLevel/box.png')
  		game.load.image('box', 'assets/marioLevel/ledge2.png');
  		game.load.image('littlebox', 'assets/marioLevel/box.png');
  		game.load.image('pipe', 'assets/marioLevel/pipe2.png');

      // Sprite Assets
      game.load.image('bullet', 'assets/weapons/bullet2.png')
      game.load.spritesheet('dude', 'assets/sprites/MegaManSprite2.png', 55, 55);
      game.load.spritesheet('turtle', 'assets/marioLevel/marioBad.png', 45, 45);
      game.load.image('star', 'assets/marioLevel/marioStar.png');
    },
    preload: function() {
      this.loadScripts();
      this.loadAssets();
    },
    addGameStates: function() {
      game.state.add('Game', Game);
    },
    create: function () {
      this.addGameStates();
    }
};
