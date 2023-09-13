import { useGameBoardContext } from "./GameBoardProvider";
import { ICell } from "./types";
import hit from 'assets/hit.png'
import miss from 'assets/miss.png'

type Props = {
  rowIndex: number;
  columnIndex: number;
  cell: ICell;
};

const GameBoardCell = ({rowIndex, columnIndex, cell}: Props) => {
  const { onCellClick } = useGameBoardContext();

  const onCellClickHandler = () => {
    onCellClick(rowIndex, columnIndex);
  };

  return (
    <div className="border cursor-pointer w-10 h-10" onClick={onCellClickHandler}>
      {cell.isTicked && (cell.shipType ? <img src={hit} /> : <img src={miss} />)}
    </div>
  );
}

export default GameBoardCell