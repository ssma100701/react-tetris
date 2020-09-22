// this file is use to create stage

// stage size
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create stage
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

// check collision
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check if it is an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check the move is inside the game areas height (y)
          !stage[y + player.pos.y + moveY] ||
          // 3. Check the move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check the cell isn't set to clean
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
};
