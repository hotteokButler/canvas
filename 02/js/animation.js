export class Animation {
  constructor(param) {
    this.canvas;
    this.canvasId;
    this.ctx;
    this.animationRef;
    this.arcData = {
      posX: null,
      posY: null,
      radius: null,
      startAngle: null,
      endAngle: null,
      counterClockWise: null,
    };
    this.startPoint = 0;
    this.breakPoint;
  }

  testLog() {
    console.log(this.canvas);
    console.log(this.canvasId);
    console.log(this.ctx);
    console.log(this.arcData.posX);
    console.log(this.arcData.posY);
    console.log(this.animationFn);
    console.log(this.animationStart);
  }

  initData(canvasId = false, arcData) {
    this.canvasId = canvasId || null;
    this.canvas = canvasId ? document.getElementById(canvasId) : document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.arcData = { ...arcData };
  }

  performAnimation(startPoint, breakPoint, animationCallbackFn) {
    this.startPoint = startPoint; //시작 포인트
    this.breakPoint = breakPoint; //정지 포인트

    const go = () => {
      this.animationRef = requestAnimationFrame(go);
      animationCallbackFn(); // 실행할 함수

      this.startPoint += 1; 
      this.arcData.posX = this.startPoint;
      
      //stop
      if(this.startPoint > this.breakPoint) {
        cancelAnimationFrame(this.animationRef);
        return;
      }
    };
    go();
  }
}
