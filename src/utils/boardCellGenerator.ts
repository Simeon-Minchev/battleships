export const generateBoardCells = () => {
  return Array(10)
    .fill(Array(10).fill(null))
    .map((column) => column.map(() => ({ isTicked: false, shipType: null })));
};
