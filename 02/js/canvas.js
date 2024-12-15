const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 최댓값은 제외, 최솟값은 포함
};

/**
 * canvas 원 그리기
 * @param {*} $canvas canvas elem
 * @param {*} $arcData 그릴 원 데이터 object
 */
const drawArc = ($canvas, $arcData) => {
  const ctx = $canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(
    $arcData.posX ?? 0,
    $arcData.posY ?? 0,
    $arcData.radius ?? 50,
    $arcData.startAngle ?? 0,
    $arcData.endAngle ?? (Math.PI *2) ,
    $arcData.counterClockWise ?? false
  );
  ctx.lineWidth = $arcData.lineWidth ?? 1;
  ctx.strokeStyle = $arcData.color ?? '#232323';
  ctx.stroke();
};

document.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('canvas');

  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let canvasEventTimer;

  // width heignt 설정
  $canvas.width = canvasWidth;
  $canvas.height = canvasHeight;

  const ctx = $canvas.getContext('2d');

  const $arcData = {
    posX: 200,
    posY: 200,
    radius: 30,
    startAngle: 0,
  };

  drawArc($canvas, $arcData);
});
