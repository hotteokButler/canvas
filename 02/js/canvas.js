const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 최댓값은 제외, 최솟값은 포함
};

/**
 * canvas 초기화
 * @param {*} $canvas canvas elem
 */
const clearCanvas = ($canvas) => {
  const ctx = $canvas.getContext('2d');
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
};

/**
 * canvas 원 그리기
 * @param {*} $canvas canvas elem
 * @param {*} $arcData 그릴 원 데이터 object
 */
const drawArc = ($canvas, $arcData) => {
  const ctx = $canvas.getContext('2d');
  clearCanvas($canvas);
  ctx.beginPath();
  ctx.arc(
    $arcData.posX ?? 0,
    $arcData.posY ?? 0,
    $arcData.radius ?? 50,
    $arcData.startAngle ?? 0,
    $arcData.endAngle ?? Math.PI * 2,
    $arcData.counterClockWise ?? false
  );
  ctx.lineWidth = $arcData.lineWidth ?? 1;
  ctx.strokeStyle = $arcData.color ?? '#232323';
  ctx.fillStyle = $arcData.color ?? '#232323';
  ctx.fill();
  ctx.stroke();
};

document.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('canvas');

  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let animationRef;

  // width heignt 설정
  $canvas.width = canvasWidth;
  $canvas.height = canvasHeight;

  const arcData = {
    posX: 200,
    posY: 200,
    radius: 30,
    color: 'tomato',
    startAngle: 0,
  };

  // frame 속도
  let dx = 4;
  let dy = 4;

  const performance = (canvas, data) => {
    animationRef = requestAnimationFrame(() => {
      performance(canvas, data);
    });
    drawArc(canvas, data);

    if (
      data.posX + data.radius > canvas.width || // canvas 우측 화면 닿으면 -방향
      data.posX - data.radius < 0 // canvas 좌측 화면 닿으면 +방향
    ) {
      dx = -dx; // 방향 반전
    }
    if (
      data.posY + data.radius > canvas.height || // canvas 우측 화면 닿으면 -방향
      data.posY - data.radius < 0 // canvas 좌측 화면 닿으면 +방향
    ) {
      dy = -dy; // 방향 반전
    }

    data.posX += dx;
    data.posY += dy;
    //stop
    // if (breakpoint) {
    //   cancelAnimationFrame(animationRef);
    //   return;
    // }
  };

  performance($canvas, arcData);

  let canvasEventTimer;
  window.addEventListener('resize', () => {
    clearTimeout(canvasEventTimer);
    cancelAnimationFrame(animationRef);
    canvasEventTimer = setTimeout(() => {
      canvasWidth = window.innerWidth - 2;
      canvasHeight = window.innerHeight - 2;

      $canvas.width = canvasWidth;
      $canvas.height = canvasHeight;
      performance($canvas, arcData);
    }, 300);
  });
});
