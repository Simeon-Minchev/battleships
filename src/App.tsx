import GameInfo from 'components/GameInfo/GameInfo';
import GameBoard from './components/GameBoard/GameBoard';
import { GameBoardProvider } from 'components/GameBoard/GameBoardProvider';
import { GameInfoProvider } from 'components/GameInfo/GameInfoProvider';

const App = () => {
  return (
    <GameInfoProvider>
      <div className="flex">
        <GameInfo />
        <GameBoardProvider>
          <GameBoard />
        </GameBoardProvider>
      </div>
    </GameInfoProvider>
  );
};

export default App;
