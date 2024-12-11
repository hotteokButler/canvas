document.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('canvas');

  let canvasWidth = window.innerWidth - 2;
  let canvasHeight = window.innerHeight - 2;
  let canvasEventTimer;

  // width heignt 설정
  $canvas.width = canvasWidth;
  $canvas.height = canvasHeight;

  const ctx = $canvas.getContext("2d");

  ctx.fillRect(100,100,150,150);
  ctx.fillRect(570,0,150,150);
  ctx.fillRect(400,300,150,150);
  ctx.fillRect(60,400,150,150);


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
