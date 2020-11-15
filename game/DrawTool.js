export class DrawTool {
    constructor(param){
        this._canvasContext = param.canvasContext || null
        this._canvasWidth = param.canvasWidth || 0
        this._canvasHeight = param.canvasHeight || 0
    }
    drawLine(last,now){
        if(last.clientX==0&&last.clientY==0) return
        this._canvasContext.moveTo(last.clientX,last.clientY)
        this._canvasContext.lineTo(now.clientX,now.clientY)
        this._canvasContext.stroke()
    }
    drawGrid(num,step = 10){
        for(let i = 0;i<=num;i+=step){
            this._canvasContext.beginPath()
            this._canvasContext.moveTo(i,0)
            this._canvasContext.lineTo(i,this._canvasHeight)
            this._canvasContext.closePath()
            this._canvasContext.stroke()
            this._canvasContext.beginPath()
            this._canvasContext.moveTo(0,i)
            this._canvasContext.lineTo(this._canvasHeight,i)
            this._canvasContext.closePath()
            this._canvasContext.stroke()
          }
    }
    drawCircle(param){
        this._canvasContext.lineWidth = 2
        this._canvasContext.strokeStyle = 'red'
        this._canvasContext.beginPath()
        this._canvasContext.arc(param.clientX,param.clientY,param.radius,0,Math.PI*2,false)
        this._canvasContext.stroke()
        this._canvasContext.strokeStyle = 'black'
    }


}