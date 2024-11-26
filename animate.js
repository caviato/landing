const red = "rgb(216, 90, 67, 0.3)";
const green = "rgb(103, 185, 164, 0.3)";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 104;

const shapes = [];
const shapeCount = (canvas.width + canvas.height) / 150;

// Define exclusion zone (for tagline)
const exclusionZone = {
  x: canvas.width / 8, // Start X position
  y: canvas.height / 4, // Start Y position
  width: (canvas.width * 3) / 4, // Exclusion zone width
  height: canvas.height / 3, // Exclusion zone height
};

// Shape constructor
class Shape {
  constructor(type) {
    this.type = type; // "circle" or "triangle"
    this.size =
      Math.random() * 50 + (canvas.width / 6 > 100 ? 120 : canvas.width / 6); // Size for both shapes
    this.color = this.type === "circle" ? red : green; // Red for circles, green for triangles
    this.rotation = this.type === "triangle" ? Math.random() * Math.PI * 2 : 0; // Random rotation for triangles
    this.floatSpeedX = Math.random() * 0.5 + 0.5; // Speed of horizontal floating
    this.floatSpeedY = Math.random() * 0.5 + 0.5; // Speed of vertical floating
    this.floatOffsetX = Math.random() * 100; // Offset for horizontal floating
    this.floatOffsetY = Math.random() * 100; // Offset for vertical floating;

    // Ensure the shape starts outside the exclusion zone
    do {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    } while (
      this.x > exclusionZone.x &&
      this.x < exclusionZone.x + exclusionZone.width &&
      this.y > exclusionZone.y &&
      this.y < exclusionZone.y + exclusionZone.height
    );

    this.baseX = this.x; // Save initial position
    this.baseY = this.y; // Save initial position
  }

  draw() {
    ctx.save(); // Save current context state
    ctx.shadowBlur = 50; // Bloom intensity
    ctx.shadowColor = this.color; // Bloom color
    ctx.shadowOffsetX = 0; // No offset
    ctx.shadowOffsetY = 0; // No offset

    ctx.beginPath();
    if (this.type === "circle") {
      // Draw circle
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    } else if (this.type === "triangle") {
      // Move to triangle center and rotate
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      // Draw triangle
      ctx.moveTo(0, -this.size / 2); // Top point
      ctx.lineTo(-this.size / 2, this.size / 2); // Bottom-left point
      ctx.lineTo(this.size / 2, this.size / 2); // Bottom-right point
      ctx.closePath();

      ctx.resetTransform(); // Reset translation and rotation
    }
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.restore(); // Restore context state to remove shadows for other shapes
  }

  update() {
    // Apply sinusoidal floating motion
    this.x =
      this.baseX +
      Math.sin(Date.now() * 0.001 * this.floatSpeedX + this.floatOffsetX) * 20;
    this.y =
      this.baseY +
      Math.cos(Date.now() * 0.001 * this.floatSpeedY + this.floatOffsetY) * 20;
  }
}

// Create initial shapes
for (let i = 0; i < shapeCount / 2; i++) {
  shapes.push(new Shape("circle"));
}

for (let i = 0; i < shapeCount / 2; i++) {
  shapes.push(new Shape("triangle"));
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw exclusion zone for debugging (optional, remove this in production)
  // ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  // ctx.fillRect(
  //   exclusionZone.x,
  //   exclusionZone.y,
  //   exclusionZone.width,
  //   exclusionZone.height,
  // );

  shapes.forEach((shape) => {
    shape.update();
    shape.draw();
  });
  requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 104;

  exclusionZone.x = canvas.width / 4;
  exclusionZone.y = canvas.height / 4;
  exclusionZone.width = canvas.width / 2;
  exclusionZone.height = canvas.height / 4;

  // Recalculate base positions for shapes
  shapes.forEach((shape) => {
    do {
      shape.baseX = Math.random() * canvas.width;
      shape.baseY = Math.random() * canvas.height;
    } while (
      shape.baseX > exclusionZone.x &&
      shape.baseX < exclusionZone.x + exclusionZone.width &&
      shape.baseY > exclusionZone.y &&
      shape.baseY < exclusionZone.y + exclusionZone.height
    );
  });
});

animate();
