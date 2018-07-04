// declaring variables
var allEnemies = []
// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    this.speed = Math.floor(Math.random() * 250 + 1);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < canvas.width) {
        this.x += dt * this.speed;
    }
    else {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.boy = 'images/char-boy.png';
}

Player.prototype.update = function () {
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.boy), this.x, this.y)
}

Player.prototype.handleInput = function (movement) {
    switch (movement) {
        case 'right':
            if (this.x !== 402) {
                this.x += 101;
            }
            break;
        case 'left':
            if (this.x !== -2) {
                this.x -= 101;
            }
            break;
        case 'up':
            if (this.y !== -13) {
                this.y -= 83
            }
            break;
        case 'down':
            if (this.y !== 402) {
                this.y += 83;
            }
    }
    console.log(this.y);
    console.log(this.x);
    

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

enemy = new Enemy(0, 70);
enemy2 = new Enemy(0, 153);
enemy3 = new Enemy(0, 236);
player = new Player(200, 402);
allEnemies.push(enemy);
allEnemies.push(enemy2);
allEnemies.push(enemy3);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// the number 70 represents overlap amount between enemy picture and player picture
function checkCollisions() {
    allEnemies.forEach(enemy => {
        if (enemy.x + 70 > player.x && enemy.x - player.x < 70 && enemy.y === player.y) {
            player.x = 200;
            player.y = 402;
        }
    });

};