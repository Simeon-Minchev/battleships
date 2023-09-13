import { EShipType } from 'components/GameBoard/types';

export const shipsHealth = {
  [EShipType.Carrier]: 5,
  [EShipType.Battleship]: 4,
  [EShipType.Cruiser]: 3,
  [EShipType.Submarine]: 3,
  [EShipType.Destroyer]: 2,
};
