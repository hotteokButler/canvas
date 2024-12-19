import { Circle } from './circle.js';

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 최댓값은 제외, 최솟값은 포함
};

/**
 * canvas 초기화
 * @param {*} $canvas canvas elem
 */
// const clearCanvas = ($canvas) => {
//   const ctx = $canvas.getContext('2d');
//   ctx.clearRect(0, 0, $canvas.width, $canvas.height);
// };

/**
 * canvas 원 그리기
 * @param {*} $canvas canvas elem
 * @param {*} $arcData 그릴 원 데이터 object
 */
// const drawArc = ($canvas, $arcData) => {
//   const ctx = $canvas.getContext('2d');
//   clearCanvas($canvas);
//   ctx.beginPath();
//   ctx.arc(
//     $arcData.posX ?? 0,
//     $arcData.posY ?? 0,
//     $arcData.radius ?? 50,
//     $arcData.startAngle ?? 0,
//     $arcData.endAngle ?? Math.PI * 2,
//     $arcData.counterClockWise ?? false
//   );
//   ctx.lineWidth = $arcData.lineWidth ?? 1;
//   ctx.strokeStyle = $arcData.color ?? '#232323';
//   ctx.fillStyle = $arcData.color ?? '#232323';
//   ctx.fill();
//   ctx.stroke();
// };

document.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('canvas');

  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let animationRef;

  // width heignt 설정
  $canvas.width = canvasWidth;
  $canvas.height = canvasHeight;
  const colorData = [
    '#012E40',
    '#024959',
    '#026773',
    '#3CA6A6',
    '#F2E3D5',
    '#EAF2DC',
    '#A0A677',
    '#736F36',
    '#A67153',
    '#261201',
  ];
  const circleArr = [];
  const count = 100;
  const circleRadius = 35;
  let canvasEventTimer;

  for (let i = 0; i < count; i++) {
    const arcData = {
      posX: getRandomInt(0, canvasWidth),
      posY: getRandomInt(0, canvasHeight),
      radius: circleRadius,
      color: colorData[getRandomInt(0, colorData.length - 1)],
      startAngle: 0,
      // frame 속도
      dx: (Math.random() - 0.5) * 5,
      dy: (Math.random() - 0.5) * 5,
      globalAlpha : Math.random().toFixed(1),
    };
    const cirElem = new Circle($canvas, arcData);
    circleArr.push(cirElem);
  }

  const performance = () => {
    animationRef = requestAnimationFrame(() => {
      performance();
    });
    $canvas.getContext('2d').clearRect(0, 0, $canvas.width, $canvas.height); // 초기화

    circleArr.forEach((elem) => {
      elem.updateCircle();
    });

    //stop
    // if (breakpoint) {
    //   cancelAnimationFrame(animationRef);
    //   return;
    // }
  };

  performance();

  window.addEventListener('resize', () => {
    clearTimeout(canvasEventTimer);
    cancelAnimationFrame(animationRef);
    canvasEventTimer = setTimeout(() => {
      canvasWidth = window.innerWidth - 2;
      canvasHeight = window.innerHeight - 2;

      $canvas.width = canvasWidth;
      $canvas.height = canvasHeight;
    }, 300);
  });
});
