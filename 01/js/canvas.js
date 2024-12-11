const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 최댓값은 제외, 최솟값은 포함
};

const drawArc = ($canvas, time, colorArr) => {
  const ctx = $canvas.getContext('2d');
  const colors = colorArr;

  for (let i = 0; i <= time; i++) {
    const colorRandom = getRandomInt(0 ,colors.length - 1);
    const posXRandom = getRandomInt(0 ,$canvas.width);
    const posYRandom = getRandomInt(0 ,$canvas.height);
    const arcSize = getRandomInt(0 ,70);
    const lineWidth = getRandomInt(0 ,30);

    ctx.beginPath();
    ctx.arc(posXRandom, posYRandom, arcSize, 0, Math.PI * 2, false);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = colors[colorRandom];
    ctx.stroke();
  }
};

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

  const colorPalette = ['#ed5db6' ,'#ed5d5d','#edb85d','#deed5d','#6bed5d','#5deaed','#835ded','#835ded','#5dedb8','#8dc769'];

  drawArc($canvas,100,colorPalette);

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
