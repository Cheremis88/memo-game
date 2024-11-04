import { ReactNode } from 'react';
import { TTheme } from '../../constants/types';
import './Layout.css';

interface ILayoutProps {
  children: ReactNode;
  theme: TTheme;
}

const Layout = ({ children, theme }: ILayoutProps) => {
  return (
    <div className={`page page_${theme}`}>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
