import circle from 'assets/circle.png';
import hitSmall from 'assets/hit-small.png';

type Props = {
  image: string;
  health: number;
  totalHealth: number;
};

const GameInfoShip = ({ image, health, totalHealth }: Props) => {
  const destroyed = totalHealth - health;
  const healthImages = Array(totalHealth).fill('health').map((_e, index) => index < destroyed ? hitSmall : circle);

  return (
    <div className="flex items-center my-2">
      <div className="h-14">
        <img src={image} className='h-full'/>
      </div>
      <div className="flex mx-8">
        {healthImages.map((element, index) => (
            <div className="w-8" key={`${element}-${index}`}>
              <img src={element} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameInfoShip;
