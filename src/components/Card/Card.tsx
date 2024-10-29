import { TCard } from '../../constants/types';
import './Card.css';

interface ICardProps {
  card: TCard;
}

const Card = ({ card }: ICardProps) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__back"></div>
        <div className="card__front">
          <img className="card__image" src={card.image} alt={card.name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
