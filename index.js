const chessBoard = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

let possibleMoves = [
  [1, 2],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [2, 1],
  [-2, -1],
  [-2, 1],
  [2, -1],
];

let count = 0;

const getAllLandingPositions = (position, possibleMoves) => {
  const arrOfMoves = possibleMoves.map((move) => {
    let [moveX, moveY] = move;
    let [positionX, positionY] = position;
    return [moveX + positionX, moveY + positionY];
  });
  return arrOfMoves;
};

const findValidMoves = (landingPositions) => {
  return landingPositions.filter((move) => {
    let [moveX, moveY] = move;
    const validPosX = moveX >= 0 && moveX <= 7;
    const validPosY = moveY >= 0 && moveY <= 7;
    return validPosX && validPosY;
  });
};

const getCoordonatesFromField = (fieldCode, chessBoard) => {
  for (let row = 0; row < chessBoard.length; row++) {
    const rows = chessBoard[row];
    for (let column = 0; column < rows.length; column++) {
      if (chessBoard[row][column] === fieldCode) {
        return [row, column];
      }
    }
  }
};

const positions = getCoordonatesFromField("d1", chessBoard);
const landingPositions = getAllLandingPositions(positions, possibleMoves);
const validPositions = findValidMoves(landingPositions);

const checkIfContains = (position, arrOfPosition) => {
  const [moveX, moveY] = position;
  const findPositions = arrOfPosition.some((pos) => {
    const [posX, posY] = pos;
    return moveX === posX && moveY === posY;
  });
  return findPositions;
};
// console.log(checkIfContains(positions, validPositions));

const findCoordinates = (endFieldCode, chessBoard) => {
  const validMoves = findValidMoves(endFieldCode);
  console.log(validMoves);
};

console.log(findCoordinates(validPositions, chessBoard));
