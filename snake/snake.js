var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var tilesize = 32
var cols = 17
var rows = 17

canvas.width = cols * tilesize
canvas.height = rows * tilesize


class Snake {

    constructor({position, velocity, width, height}) {

        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {

            ctx.fillStyle = 'green'
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
            
        
        

        // if(snakebody.length > taillength) {

        //     snakebody.shift()
        // }
        

    }

    update() {

        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        

    }
}

class Apple {

    constructor({position, width, height}) {

        this.position = position
        this.width = width
        this.height = height
    }

    draw() {

        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        
    }

    update() {

       


        this.draw()
    }

}



var apple = new Apple({
    position: {
        x: Math.floor(Math.random() * cols) * tilesize,
        y: Math.floor(Math.random() * rows) * tilesize
    },
    
    width: tilesize,
    height: tilesize,
})
    


var snakebody = []



var snake = new Snake({
    position: {
        x: Math.floor(Math.random() * cols) * tilesize,
        y: Math.floor(Math.random() * rows) * tilesize
    },
    velocity: {
        x: 0,
        y: 0
    },
    width: tilesize,
    height: tilesize,
})

snakebody.push(snake)
//snakebody.push(apple)


    
    
  


function animate() {

    requestAnimationFrame(animate)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

     
    for(var i = 0; i < snakebody.length; i++) {
    
        var snake = snakebody[i]
        
        if(snake.position.x == apple.position.x && snake.position.y == apple.position.y) {
            
            apple.position.x = Math.floor(Math.random() * cols) * tilesize,
            apple.position.y = Math.floor(Math.random() * rows) * tilesize
        
            //snakebody.push(apple)
            
            //`snake.update()
            //apple.update()
            
        } else {
            
            apple.update()
            snake.update()
            
        }
        

        
        

    }

    

   
    
    
    

    
    // for(var i = snakebody.length - 1; i > 0; i--){
        
    //     snakebody[i] = snakebody[i - 1]
        
        
    // }
    // if(snakebody.length) {
        
    //     snakebody[0] = [snake.position.x, snake.position.y]
    // }
    
    
}

animate()

console.log(snake)

window.addEventListener('keydown', function(event) {

    
    switch(event.key) {

        case 'a':

            
            snake.velocity.y = 0
            snake.velocity.x = -1
            
           
            break

        case 'd':

            
            snake.velocity.y = 0
            snake.velocity.x = 1
            
            
            break

            
        case 's':

            
            snake.velocity.x = 0
            snake.velocity.y = 1
            
            break

        case 'w':

            
            snake.velocity.x = 0
            snake.velocity.y = -1
            
            break
    }
})
