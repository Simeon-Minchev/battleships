import { useEffect } from 'react';
import GameBoardCell from './GameBoardCell';
import { useGameBoardContext } from './GameBoardProvider';
import { EShipType, ICell } from './types';

const shipsPositions = [
  {
    ship: EShipType.Carrier,
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
  },
  {
    ship:  EShipType.Battleship,
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
  },
  {
    ship: EShipType.Cruiser,
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
  },
  {
    ship: EShipType.Submarine,
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
  },
  {
    ship: EShipType.Destroyer,
    positions: [
      [0, 0],
      [1, 0],
    ],
  },
];

const GameBoard = () => {
  const { boardCells, placeShipsOnBoard } = useGameBoardContext();

  useEffect(() => {
    placeShipsOnBoard(shipsPositions);
  }, []);

  return (
    <div className="grid grid-cols-10 border-4 border-orange-400 w-fit h-fit">
      {boardCells.map((row, rowIndex) =>
        row.map((cell: ICell, columnIndex: number) => (
          <GameBoardCell key={`${rowIndex}${columnIndex}`} rowIndex={rowIndex} cell={cell} columnIndex={columnIndex} />
        )),
      )}
    </div>
  );
};

export default GameBoard;
