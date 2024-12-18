import { useMemo } from 'react';
import { TCard } from '../../constants/types';
import './Card.css';

interface ICardProps {
  card: TCard;
  onTurn: (card: TCard) => void;
  isTurned: boolean;
  isMatched: boolean;
}

const Card = ({ card, onTurn, isTurned, isMatched }: ICardProps) => {
  const randomRotate = useMemo(
    () => Math.floor(Math.random() * 21 - 10),
    [card]
  );
  const cardClass = isTurned ? 'card__inner turned' : 'card__inner';
  const frontClass = isMatched ? 'card__front matched' : 'card__front';

  return (
    <div
      className="card"
      style={{ rotate: randomRotate + 'deg' }}
      onClick={() => onTurn(card)}
    >
      <div className={cardClass}>
        <div className="card__back"></div>
        <div className={frontClass}>
          <img className="card__image" src={card.image} alt={card.name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
