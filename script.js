var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    console.log(3)
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assests/dude.png',32,48);
    
}

function create() {
    game.add.sprite(0 , 0 , 'star');
    console.log(2)
}


function update() {
}