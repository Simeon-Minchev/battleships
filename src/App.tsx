import GameInfo from 'components/GameInfo/GameInfo';
import GameBoard from './components/GameBoard/GameBoard';
import { GameBoardProvider } from 'components/GameBoard/GameBoardProvider';
import { GameInfoProvider } from 'components/GameInfo/GameInfoProvider';
import Banner from 'components/Banner/Banner';

const App = () => {
  return (
    <GameInfoProvider>
      <div className="flex flex-col items-center">
        <div className="flex p-8 items-center justify-center">
          <GameInfo />
          <GameBoardProvider>
            <GameBoard />
          </GameBoardProvider>
        </div>
        <Banner />
      </div>
    </GameInfoProvider>
  );
};

export default App;
