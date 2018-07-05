// declaring variables
var allEnemies = []
let score = 0;
let displayScore = document.querySelector('.score');
let lives = 3;
let displaylives = document.querySelector('.lives');
let sForPlural = document.querySelector('.s-for-plural');
let play = false;

// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    //300 is a random number to produce reasonable speed for each enemy
    this.speed = Math.random() * 300;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // should multiply any movement by the dt parameter
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
    if (play) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};


var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.char = 'images/char-boy.png';
}

Player.prototype.update = function (dt) {
    //checking the wining condition
    if (player.y === -13) {
        this.x = 200;
        this.y = 402;
        score++;
        enemyFactory();
    }
}

Player.prototype.render = function () {
    if (play) {
        ctx.drawImage(Resources.get(this.char), this.x, this.y)
    }
}

Player.prototype.handleInput = function (movement) {
    if (play) {
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
    }
}


function enemyFactory() {
    //this array holds all possible Y-axis positions for enemies
    let allPositions = [70, 153, 236]
    let position = randomPosition(allPositions)
    enemy = new Enemy(0, position);
    allEnemies.push(enemy);
}


//a helper function to generate automatic positioning for enemis
function randomPosition(array){
    return array[Math.floor(Math.random() * array.length)];
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
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
            //put player in start point
            player.x = 200;
            player.y = 402;
            lives--;
        }
    });
};
//called in engin.js
function updateExtras() {
    displayScore.innerHTML = score;
    displaylives.innerHTML = lives;
    sForPlural.innerHTML = lives === 1 ? 'live' : 'lives';
}

function choosePlayer() {
    swal({
        title: "Choose Player",
        input: 'select',
        inputOptions: {
            '1': 'Boy',
            '2': 'Girl',
        },
        inputValidator: function (value) {
            return new Promise(function (resolve, reject) {
                if (value !== '') {
                    resolve();
                } else {
                    reject('You need to select a Player');
                }
            });
        },
        //icon: "success",
        button: "Start Game",
    }).then(function (result) {
        if (result) {
            if (result === '1') {
                player.char = 'images/char-boy.png';
            } else {
                player.char = 'images/char-cat-girl.png';
            }
            play = true;
        }
    });
}

//first time enemy instanstiation then this method called in player.update()
enemyFactory();

player = new Player(200, 402);


