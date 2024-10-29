import { TCard } from '../constants/types';

function createCards(icons: Record<string, string>) {
  const cards: TCard[] = [];
  for (let key in icons) {
    const card = {
      name: key,
      image: icons[key]
    };
    cards.push({...card, id: cards.length + 1});
    cards.push({...card, id: cards.length + 1});
  }
  return cards;
}

export default createCards;