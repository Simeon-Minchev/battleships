import GameInfoScoreBoard from './GameInfoScoreBoard';
import GameInfoShips from './GameInfoShips';

const GameInfo = () => {
  return (
    <div className="flex flex-col items-center justify-between self-stretch">
      <GameInfoScoreBoard />
      <GameInfoShips />
    </div>
  )
}

export default GameInfo