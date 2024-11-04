import { useState } from 'react';
import defineTheme from '../../helpers/defineTheme';
import Layout from '../Layout/Layout';
import CardBoard from '../CardBoard/CardBoard';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(defineTheme());
  return (
    <Layout theme={theme}>
      <CardBoard />
    </Layout>
  );
};

export default App;