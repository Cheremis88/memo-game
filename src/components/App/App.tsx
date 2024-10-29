import Card from '../Card/Card';
import CARDS from '../../constants/cards';
import './App.css';

const App = () => {
  return (
    <div className="wrap">
      <Card card={CARDS[9]} />
    </div>
  )
}

export default App;