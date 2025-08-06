class Kaleidoscope {
  constructor({ canvas, slices = 8, radius = 300 }) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.bufferCanvas = document.createElement("canvas");
    this.bufferContext = this.bufferCanvas.getContext("2d");

    this.slices = slices;
    this.radius = radius;

    this.angle = Math.PI / 4;
    this.scale = 0.7;
    this.iterations = 5;
    this.animate = true;
    this.rotationSpeed = 0.02;

    this.rotation = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.hue = 0;

    // Texto en el centro
    this.centerText = "Catarsis"; // Cambia esto si quieres otro texto
    this.textColor = "#ffffff";
    this.textSize = 28;
    this.fontFamily = "sans-serif";

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    const { innerWidth: width, innerHeight: height } = window;
    this.canvas.width = width;
    this.canvas.height = height;
    this.bufferCanvas.width = width;
    this.bufferCanvas.height = height;

    this.bufferContext.translate(width / 2, height);
  }

  drawFractal(x, y, angle, size, depth) {
    if (depth <= 0) return;

    const endX = x + Math.cos(angle) * size;
    const endY = y + Math.sin(angle) * size;

    this.bufferContext.strokeStyle = `hsl(${this.hue}, 100%, 70%)`;
    this.bufferContext.lineWidth = 2;

    this.bufferContext.beginPath();
    this.bufferContext.moveTo(x, y);
    this.bufferContext.lineTo(endX, endY);
    this.bufferContext.stroke();

    this.drawFractal(
      endX,
      endY,
      angle + this.angle,
      size * this.scale,
      depth - 1
    );
    this.drawFractal(
      endX,
      endY,
      angle - this.angle,
      size * this.scale,
      depth - 1
    );
  }

  drawPattern() {
    this.bufferContext.save();
    this.bufferContext.setTransform(1, 0, 0, 1, 0, 0);
    this.bufferContext.clearRect(
      0,
      0,
      this.bufferCanvas.width,
      this.bufferCanvas.height
    );
    this.bufferContext.restore();

    this.drawFractal(
      0,
      -this.radius * this.scale,
      -Math.PI / 2,
      this.radius,
      this.iterations
    );

    this.hue = (this.hue + 1) % 360;
  }

  draw() {
    const ctx = this.context;
    const buffer = this.bufferCanvas;

    this.drawPattern();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

    const step = (Math.PI * 2) / this.slices;

    for (let i = 0; i < this.slices; i++) {
      ctx.save();
      ctx.rotate(i * step + this.rotation);
      if (i % 2 === 1) ctx.scale(-1, 1);

      // Dibuja el patrón
      ctx.drawImage(buffer, -this.canvas.width / 2, -this.canvas.height);

      // Dibuja el texto en el centro del segmento
      ctx.fillStyle = this.textColor;
      ctx.font = `${this.textSize}px ${this.fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.centerText, 0, 0);

      ctx.restore();
    }

    if (this.animate) {
      this.rotation += this.rotationSpeed;
    }

    requestAnimationFrame(() => this.draw());
  }
}

// Inicialización
const canvas = document.getElementById("kaleidoscope");
const kaleidoscope = new Kaleidoscope({ canvas });

kaleidoscope.draw();

// Panel de control
const gui = new dat.GUI();
gui.add(kaleidoscope, "slices", 3, 20, 1).name("Segmentos");
gui.add(kaleidoscope, "angle", 0, Math.PI).name("Ángulo entre ramas");
gui.add(kaleidoscope, "scale", 0.5, 1).name("Escala del fractal");
gui.add(kaleidoscope, "iterations", 1, 10, 1).name("Niveles de detalle");
gui.add(kaleidoscope, "animate").name("Animar");
gui.add(kaleidoscope, "rotationSpeed", 0, 0.1).name("Velocidad de rotación");
gui.add(kaleidoscope, "radius", 100, 500).name("Radio del caleidoscopio");

// Controles para texto
gui.add(kaleidoscope, "centerText").name("Texto central");
gui.add(kaleidoscope, "textSize", 10, 100).name("Tamaño del texto");
gui.addColor(kaleidoscope, "textColor").name("Color del texto");
gui.close();
