import { EShipType } from 'components/GameBoard/types';
import { shipsHealth } from 'constants';
import { ReactNode, createContext, useContext, useState } from 'react';

interface IPlayerScore {
  ships: {
    [EShipType.Carrier]: {
      health: number;
    };
    [EShipType.Battleship]: {
      health: number;
    };
    [EShipType.Cruiser]: {
      health: number;
    };
    [EShipType.Submarine]: {
      health: number;
    };
    [EShipType.Destroyer]: {
      health: number;
    };
  };
  points: number;
}

interface IGameInfoContext {
  player1Score: IPlayerScore;
  hitShip: (shipType: EShipType) => void;
  isGameFinished: boolean;
}

const defaultPlayerScore = {
  ships: {
    [EShipType.Carrier]: {
      health: shipsHealth.Carrier,
    },
    [EShipType.Battleship]: {
      health: shipsHealth.Battleship,
    },
    [EShipType.Cruiser]: {
      health: shipsHealth.Cruiser,
    },
    [EShipType.Submarine]: {
      health: shipsHealth.Submarine,
    },
    [EShipType.Destroyer]: {
      health: shipsHealth.Destroyer,
    },
  },
  points: 0,
};

const GameInfoContext = createContext<IGameInfoContext>({
  player1Score: defaultPlayerScore,
  hitShip: () => {},
  isGameFinished: false,
});

type Props = {
  children: ReactNode;
};

export const GameInfoProvider = ({ children }: Props) => {
  const [player1Score, setPlayer1Score] = useState(defaultPlayerScore);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const hitShipHandler = (shipType: EShipType) => {
    player1Score.ships[shipType].health -= 1;
    player1Score.points += 1;

    const healthyShips = Object.values(player1Score.ships).reduce<number>((acc, element) => acc + element.health, 0);

    if (healthyShips === 0) {
      setIsGameFinished(true);
    }
    setPlayer1Score({ ...player1Score });
  };

  const contextValue = {
    player1Score,
    hitShip: hitShipHandler,
    isGameFinished
  };

  return <GameInfoContext.Provider value={contextValue}>{children}</GameInfoContext.Provider>;
};

export const useGameInfoContext = () => useContext(GameInfoContext);
