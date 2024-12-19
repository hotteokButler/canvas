export class Circle {
  constructor(canvas,data) {
    this.canvas = canvas;
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.arcData = {...data};
  }


  drawArc() {
    if (!this.canvas) {
      console.log('데이터가 입력되지 않았습니다.');
      return;
    }
    this.ctx.beginPath();
    this.ctx.arc(
      this.arcData.posX ?? 0,
      this.arcData.posY ?? 0,
      this.arcData.radius ?? 50,
      this.arcData.startAngle ?? 0,
      this.arcData.endAngle ?? Math.PI * 2,
      this.arcData.counterClockWise ?? false
    );
    this.ctx.lineWidth = this.arcData.lineWidth ?? 1;
    this.ctx.strokeStyle = this.arcData.color ?? 'transparent';
    this.ctx.fillStyle = this.arcData.color ?? '#232323';
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.globalAlpha = Number(this.arcData.globalAlpha);
  }

  updateCircle() {
    if (
      this.arcData.posX + this.arcData.radius > canvas.width || // canvas 우측 화면 닿으면 -방향
      this.arcData.posX - this.arcData.radius < 0 // canvas 좌측 화면 닿으면 +방향
    ) {
      this.arcData.dx = -this.arcData.dx; // 방향 반전
    }
    if (
      this.arcData.posY + this.arcData.radius > canvas.height || // canvas 우측 화면 닿으면 -방향
      this.arcData.posY - this.arcData.radius < 0 // canvas 좌측 화면 닿으면 +방향
    ) {
      this.arcData.dy = -this.arcData.dy; // 방향 반전
    }

    this.arcData.posX += this.arcData.dx;
    this.arcData.posY += this.arcData.dy;

    this.drawArc();
  }
}
