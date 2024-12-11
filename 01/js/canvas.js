document.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('canvas');

  let canvasWidth = window.innerWidth - 2;
  let canvasHeight = window.innerHeight - 2;
  let canvasEventTimer;

  // width heignt 설정
  $canvas.width = canvasWidth;
  $canvas.height = canvasHeight;

  const ctx = $canvas.getContext('2d');

  ctx.fillStyle = '#96d8d8a6';
  ctx.fillRect(100, 100, 150, 150);
  ctx.fillStyle = '#d8cd96a6';
  ctx.fillRect(570, 0, 150, 150);
  ctx.fillStyle = '#d896bea6';
  ctx.fillRect(400, 300, 150, 150);

  // line
  ctx.beginPath();
  ctx.strokeStyle = '#66B366';
  ctx.stro = '#66B366';
  ctx.moveTo(150, 300); //시작
  ctx.lineTo(200, 100); //선을 잇는 점 좌표
  ctx.stroke(); //그리기

  ctx.beginPath();
  ctx.strokeStyle = '#EEBC68';
  ctx.moveTo(200, 100);
  ctx.lineTo(400, 300);
  ctx.stroke(); //그리기
  
  ctx.beginPath();
  ctx.arc(300, 300, 40, 0, Math.PI * 2, false);
  ctx.strokeStyle = "#5d9358"
  ctx.stroke();

  window.addEventListener('resize', () => {
    clearTimeout(canvasEventTimer);
    canvasEventTimer = setTimeout(() => {
      canvasWidth = window.innerWidth - 2;
      canvasHeight = window.innerHeight - 2;

      $canvas.width = canvasWidth;
      $canvas.height = canvasHeight;
    }, 300);
  });
});
