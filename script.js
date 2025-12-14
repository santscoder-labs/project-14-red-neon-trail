const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let angle = 0;

function animate() {
  requestAnimationFrame(animate);

  // fade suave para criar o rastro / Smooth fade to create the trail.
  ctx.fillStyle = "rgba(13, 13, 13, 0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const radius = 180;

  x = canvas.width / 2 + Math.cos(angle) * radius;
  y = canvas.height / 2 + Math.sin(angle * 1.4) * radius;

  angle += 0.03;

  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#ff002b";
  ctx.shadowColor = "#ff002b";
  ctx.shadowBlur = 25;
  ctx.fill();
}

animate();
