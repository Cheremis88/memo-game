import { TTheme } from '../../constants/types';
import './Menu.css';

interface IMenuProps {
  theme: TTheme;
  move: number;
  isGame: boolean;
  setIsGame: (isGame: boolean) => void;
  setTheme: (theme: TTheme) => void;
}

const Menu = ({ theme, move, isGame, setIsGame, setTheme }: IMenuProps) => {
  const isChecked = theme === 'light';

  function handleCheck() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className="menu">
      <p className="moves">Ход: {move}</p>
      <button
        className="game-button"
        disabled={isGame}
        onClick={() => setIsGame(true)}
      >
        Начать игру
      </button>
      <label className="switcher">
        <input
          className="switcher__checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
        />
      </label>
    </div>
  );
};

export default Menu;
