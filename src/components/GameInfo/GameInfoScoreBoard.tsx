import GameInfoPlayerScore from "./GameInfoPlayerScore";
import { useGameInfoContext } from "./GameInfoProvider";

const GameInfoScoreBoard = () => {
  const {
    player1Score: { points,  },
  } = useGameInfoContext();

  return (
    <div className="flex p-4">
      <div className="bg-orange-400"><GameInfoPlayerScore score={points} player="Player 1" /></div>
      <div className="bg-teal-700"><GameInfoPlayerScore score={0} player="Player 2" /></div>
    </div>
  );
};

export default GameInfoScoreBoard;
