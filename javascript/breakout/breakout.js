var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
tileWidth = 64
tileHeight = 20

class Paddle {

    constructor({position, velocity, width, height}) {

        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        
    }

    draw() {

        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)


    }

    update() {

        this.draw()
        this.position.x += this.velocity.x
    }

}

class Ball {

    constructor({position, velocity, width, height}) {

        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        
    }

    draw() {

        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)


    }

    update() {

        this.draw()

        if(this.position.x + this.width >= canvas.width) {

            this.velocity.x *= -1

        }else if(this.position.y < 0) {

            this.velocity.y *= -1
        }else if(this.position.x < 0) {

            this.velocity.x *= -1
        }else if(this.position.y > paddle.position.y) {
            
            this.velocity.y *= -1
        }else if(this.position.y < block.position.y) {

            this.velocity.y *= -1
            block.blockHit = true
            blocks.splice(block)
        } 
        this.position.x += this.velocity.x
        this.position.y -= this.velocity.y
    }

}

class Block {

    constructor({position, width, height}) {

        this.position = position
        this.height = height
        this.width = width
        
    }

    draw() {

        for(var i = 0; i < blocks.length; i++) {


            var block = blocks[i]
            ctx.fillStyle = 'green'
            ctx.fillRect(block.position.x, block.position.y, block.width, block.height)

        }


    }

    update() {

        this.draw()
    
    }

}

var paddle = new Paddle({

    position: {
        x: canvas.width / 2,
        y: canvas.height - 32
    },
    velocity: {
        x: 0,
        y: 0
    },
    width: 150,
    height: 20,
})


var ball = new Ball({

    position: {
        x: paddle.position.x + paddle.width / 2,
        y: paddle.position.y - 20
    },
    velocity: {
        x: Math.random() * 1,
        y: 1
    },
    width: 20,
    height: 20,
})

var blocks = []

for(var x = 0; x < canvas.width / tileWidth; x++) {

    for(var y = 0; y < 9; y++) {

        var block = new Block({

            position: {
                x: x * tileWidth,
                y: y * tileHeight
            },

            width: tileWidth,
            height: tileHeight,
            blockHit: false,
        })

        blocks.push(block)
    }
}

function animate() {

    requestAnimationFrame(animate)


    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    paddle.update()
    ball.update()

    for(var i = 0; i < blocks.length; i++) {

        var block = blocks[i]
        block.update()
    }
}

animate()

window.addEventListener('keydown', function(event) {

    switch(event.key) {

        case 'a':

            if(paddle.position.x >= 0) {

                paddle.velocity.x = -1

                
            } else {
                
                paddle.position.x = 0
                
            }
            
            break
            
        case 'd':

            if(paddle.position.x + paddle.width <= canvas.width) {
                
                paddle.velocity.x = 1

            }else {
                
                paddle.position.x = 0
                
            }
            break
        }
})

window.addEventListener('keyup', function(event) {

    switch(event.key) {

        case 'a':

            if(paddle.position.x >= 0) {

                paddle.velocity.x = -1

                
            } else {
                
                paddle.position.x = 0
                
            }
            
            break
            
        case 'd':

            if(paddle.position.x + paddle.width <= canvas.width) {
                
                paddle.velocity.x = 1

            }else {
                
                paddle.position.x = 0
                
            }
            break
        }
})