import { useGameBoardContext } from "./GameBoardProvider";
import { ICell } from "./types";
import hitShape from 'assets/hit-shape.png'
import missShape from 'assets/miss-shape.png'

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
      {cell.isTicked && (cell.shipType ? <img src={hitShape} /> : <img src={missShape} />)}
    </div>
  );
}

export default GameBoardCell