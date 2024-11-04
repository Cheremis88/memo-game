import { useEffect, useRef, useState } from 'react';
import CARDS from '../../constants/cards';
import { TCard } from '../../constants/types';
import shuffle from '../../helpers/shuffle';
import Card from '../Card/Card';
import './CardBoard.css';

interface ICardBoardProps {
  isGame: boolean;
  setIsGame: (isGame: boolean) => void;
  setMove: React.Dispatch<React.SetStateAction<number>>;
}

const CardBoard = ({ isGame, setIsGame, setMove }: ICardBoardProps) => {
  const [cards, setCards] = useState(CARDS);
  const [isBoard, setIsBoard] = useState(true);
  const [turnedCards, setTurnedCards] = useState<TCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<TCard[]>([]);
  const timer = useRef(0);
  const boardClass = isBoard ? 'card-board' : 'card-board inactive';
  
  useEffect(() => {
    if (isGame) {
      setIsBoard(false);
      setMatchedCards([]);
      setMove(0);
      setTimeout(() => {
        setCards(shuffle([...CARDS]));
        setIsBoard(true);
      }, 1000);
    }
  }, [isGame]);

  function turnCard(card: TCard) {
    if (turnedCards.length !== 1) {
      clearTimeout(timer.current);
      setTurnedCards([card]);
      return;
    }

    setMove((prev) => prev + 1);

    if (card.name === turnedCards[0].name) {
      setMatchedCards([...matchedCards, turnedCards[0], card]);
      setTurnedCards([]);
      (matchedCards.length === cards.length - 2) && setIsGame(false);
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
      matchedCards.some((card) => card.id === id) ||
      !isGame
    ) {
      return true;
    }
    return false;
  }

  return (
    <section className={boardClass}>
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
  );
};

export default CardBoard;
