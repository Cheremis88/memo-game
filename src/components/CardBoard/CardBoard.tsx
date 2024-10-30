import { useState } from 'react';
import CARDS from '../../constants/cards';
import { TCard } from '../../constants/types';
import Card from '../Card/Card';
import './CardBoard.css';

const CardBoard = () => {
  const [turnedCards, setTurnedCards] = useState<TCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<TCard[]>([]);
  const [isBoardActive, setIsBoardActive] = useState(true);
  const boardClass = isBoardActive ? 'card-board' : 'card-board inactive';

  function turnCard(card: TCard) {
    setTurnedCards([...turnedCards, card]);
    if (turnedCards.length === 1) {
      setIsBoardActive(false);
      setTimeout(() => {
        setTurnedCards([]);
        setIsBoardActive(true);
        if (card.name === turnedCards[0].name) {
          setMatchedCards([...matchedCards, turnedCards[0], card]);
        }
      }, 1500);
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
    <section className={boardClass}>
      {CARDS.map((card) => (
        <Card
          card={card}
          key={card.id}
          onTurn={turnCard}
          isTurned={checkCard(card.id)}
        />
      ))}
    </section>
  );
};

export default CardBoard;
