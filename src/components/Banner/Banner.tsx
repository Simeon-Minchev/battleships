import { useGameInfoContext } from 'components/GameInfo/GameInfoProvider';

const Banner = () => {
  const { isGameFinished } = useGameInfoContext();

  return <div className="text-2xl">{isGameFinished && 'Player 1 wins! Please restart to play again.'}</div>;
};

export default Banner;
