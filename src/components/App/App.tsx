import { useState } from 'react';
import { TTheme } from '../../constants/types';
import defineTheme from '../../helpers/defineTheme';
import Layout from '../Layout/Layout';
import CardBoard from '../CardBoard/CardBoard';
import Menu from '../Menu/Menu';

const App = () => {
  const [theme, setTheme] = useState<TTheme>(defineTheme());
  const [isGame, setIsGame] = useState(false);
  const [move, setMove] = useState(0);
  return (
    <Layout theme={theme}>
      <Menu
        theme={theme}
        move={move}
        isGame={isGame}
        setIsGame={setIsGame}
        setTheme={setTheme}
      />
      <CardBoard isGame={isGame} setIsGame={setIsGame} setMove={setMove} />
    </Layout>
  );
};

export default App;
