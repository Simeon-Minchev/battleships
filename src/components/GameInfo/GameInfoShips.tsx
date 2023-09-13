import { useGameInfoContext } from './GameInfoProvider';
import GameInfoShip from './GameInfoShip';
import carrierShape from 'assets/carrier-shape.png';
import battleshipShape from 'assets/battleship-shape.png';
import cruiserShape from 'assets/cruiser-shape.png';
import submarineShape from 'assets/submarine-shape.png';
import destroyerShape from 'assets/destroyer-shape.png';
import { shipsHealth } from 'constants';

const GameInfoShips = () => {
  const {
    player1Score: { ships },
  } = useGameInfoContext();

  return (
    <div>
      <GameInfoShip image={carrierShape} totalHealth={shipsHealth.Carrier} health={ships.Carrier.health} />
      <GameInfoShip image={battleshipShape} totalHealth={shipsHealth.Battleship} health={ships.Battleship.health} />
      <GameInfoShip image={cruiserShape} totalHealth={shipsHealth.Cruiser} health={ships.Cruiser.health} />
      <GameInfoShip image={submarineShape} totalHealth={shipsHealth.Submarine} health={ships.Submarine.health} />
      <GameInfoShip image={destroyerShape} totalHealth={shipsHealth.Destroyer} health={ships.Destroyer.health} />
    </div>
  );
};

export default GameInfoShips;
