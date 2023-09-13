type Props = {
  score: number,
  player: string,
}

const GameInfoPlayerScore = ({score, player}: Props) => {
  return (
    <div className="p-2 text-center">
      <div className="p-4 text-4xl font-bold">{score}</div>
      <hr />
      <div className="p-4 text-2xl" >{player}</div>
    </div>
  )
}

export default GameInfoPlayerScore