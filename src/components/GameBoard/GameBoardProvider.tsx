import { ReactNode, createContext, useContext, useState } from "react";
import { ICell, IShipPosition } from "./types";
import { generateBoardCells } from "utils/boardCellGenerator";

interface IGameBoardContext {
  boardCells: ICell[][],
  onCellClick: (rowIndex: number, columnIndex: number) => void,
  placeShipsOnBoard: (shipsPositions: IShipPosition[]) => void,
}

export const GameBoardContext = createContext<IGameBoardContext>({
  boardCells: [],
  onCellClick: () => {},
  placeShipsOnBoard: () => {},
});

type Props = {
  children: ReactNode
}

export const GameBoardProvider = ({children}: Props) => {
  const [boardCells, setBoardCells] = useState(generateBoardCells());

  const placeShipsOnBoardHandler = (shipsPositions: IShipPosition[]) => {
    shipsPositions.forEach(({ship, positions}) => {
      positions.forEach(([x, y]) => {
        boardCells[x][y].shipType = ship;
      })
    });

    setBoardCells([...boardCells]);
  }

  const onCellClickHandler = (rowIndex: number, columnIndex: number) => {
    const clickedCell = boardCells[rowIndex][columnIndex];

    if (clickedCell.isTicked) {
      return;
    }

    clickedCell.isTicked = true;

    setBoardCells([...boardCells]);
  };

  const contextValue = {
    boardCells,
    onCellClick: onCellClickHandler,
    placeShipsOnBoard: placeShipsOnBoardHandler
  };

  return (
    <GameBoardContext.Provider value={contextValue}>
      {children}
    </GameBoardContext.Provider>
  )
}

export const useGameBoardContext = () => useContext(GameBoardContext);
