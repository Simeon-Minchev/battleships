export enum EShipType {
  Carrier = 'Carrier',
  Battleship = 'Battleship',
  Cruiser = 'Cruiser',
  Submarine = 'Submarine',
  Destroyer = 'Destroyer',
}

export interface ICell {
  isTicked: boolean;
  shipType: EShipType | null;
}

export interface IShipPosition {
  ship: EShipType;
  positions: number[][];
}
