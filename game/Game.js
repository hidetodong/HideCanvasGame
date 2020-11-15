import { DrawTool } from "../game/DrawTool.js";
export class Game {
  constructor(param) {
    this._x = 2;
    this._y = 2;
    this._circles = [];
    this._radius = 1;
    this._canvasWidth = param.canvasWidth || 100;
    this._canvasHeight = param.canvasHeight || 100;
    // 初始化画板
    this._canvasId = param.canvasId || null;
    this._canvasObject = document.getElementById(this._canvasId);
    this._canvasContext = this._canvasObject.getContext("2d");
    // 初始化画笔工具
    this._canvasDrawer = new DrawTool({
      canvasContext: this._canvasContext,
      canvasWidth: this._canvasWidth,
      canvasHeight: this._canvasHeight,
    });
  }
  createGame() {
    if (this._canvasId == null) {
      alert("未找到Canvas实例");
    } else {
      
      this._canvasObject.width = this._canvasWidth;
      this._canvasObject.height = this._canvasHeight;
      this.startGameLoop(0)
      // this.bindCanvasClick();
    }
  }
  bindCanvasClick() {
    this._canvasObject.addEventListener("click", (param) => {
      // console.log(param)
      // this._canvasDrawer.drawCircle(param)
      this._circles.push({
        clientX: param.clientX,
        clientY: param.clientY,
        radius: 5,
      });
      // this.judgeDraw(param)
    });
  }
  updateGame(t) {
    // console.log(t)
  }
  renderGame() {
    this._canvasDrawer.drawGrid(600, 30);
    let last = {
      clientX: 0,
      clientY: 0,
      radius: 50,
    };
    if (this._circles.length > 0) {
      this._circles.forEach((ele, idx) => {
        this._canvasDrawer.drawCircle(ele);
        this._canvasDrawer.drawLine(last, ele);
        last = ele;
      });
    }
  }
  startGameLoop(tframe) {
    this._radius += 10;
    // update render parameter
    this.updateGame(tframe);
    // render context
    this.renderGame();
    // start game loop
    window.requestAnimationFrame(this.startGameLoop.bind(this));
  }
}
