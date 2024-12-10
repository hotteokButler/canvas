document.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('canvas');

  let canvasWidth = window.innerWidth - 2;
  let canvasHeight = window.innerHeight - 2;

  $canvas.width = canvasWidth;
  $canvas.height = canvasHeight;

  let canvasEventTimer;

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
