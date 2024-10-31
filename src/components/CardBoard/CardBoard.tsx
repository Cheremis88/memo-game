import { useRef, useState } from 'react';
import CARDS from '../../constants/cards';
import { TCard } from '../../constants/types';
import shuffle from '../../helpers/shuffle';
import Card from '../Card/Card';
import './CardBoard.css';

const CardBoard = () => {
  const [cards, setCards] = useState(shuffle([...CARDS]));
  const [turnedCards, setTurnedCards] = useState<TCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<TCard[]>([]);
  const [move, setMove] = useState(0);
  const timer = useRef(0);

  function turnCard(card: TCard) {
    if (turnedCards.length !== 1) {
      clearTimeout(timer.current);
      setTurnedCards([card]);
      return;
    }
    setMove(prev => prev + 1);
    if (card.name === turnedCards[0].name) {
      setMatchedCards([...matchedCards, turnedCards[0], card]);
      setTurnedCards([]);
    } else {
      setTurnedCards([turnedCards[0], card]);
      timer.current = setTimeout(() => {
        setTurnedCards([]);
      }, 1000);
    }
  }

  function checkCard(id: number) {
    if (
      turnedCards.some((card) => card.id === id) ||
      matchedCards.some((card) => card.id === id)
    ) {
      return true;
    }
    return false;
  }

  return (
    <>
    <h1>Количество ходов: {move}</h1>
    <section className="card-board">
      {cards.map((card) => (
        <Card
          card={card}
          key={card.id}
          onTurn={turnCard}
          isTurned={checkCard(card.id)}
          isMatched={matchedCards.some((item) => item.id === card.id)}
        />
      ))}
    </section>
    </>
  );
};

export default CardBoard;
