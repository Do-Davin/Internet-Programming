const canvas = document.getElementById("brickWall");
const ctx = canvas.getContext("2d");

const width = 80;
const height = 40;
const rows = 12;
const cols = 15;
const mortar = 5; 

for (let i = 0; i < rows; i++) {
  const offset = (i % 2 === 0) ? 0 : width / 2;

  for (let k = 0; k < cols; k++) {
    const posX = k * (width + mortar) - offset;
    const posY = i * (height + mortar);

    ctx.fillStyle = "#b55239"; // Brick color 
    ctx.fillRect(posX, posY, width, height);
  }
}