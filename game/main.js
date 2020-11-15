console.log('Starting game...')
import { Game }  from './Game.js' 
let game = new Game({
    canvasId:'game',
    canvasWidth:600,
    canvasHeight:600,
})
game.createGame()
// game.startGameLoop(0)