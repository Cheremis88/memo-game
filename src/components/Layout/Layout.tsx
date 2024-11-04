import { ReactNode } from 'react';
import './Layout.css';

interface ILayoutProps {
  children: ReactNode;
  theme: 'light' | 'dark';
}

const Layout = ({ children, theme }: ILayoutProps) => {
  return (
    <div className={`page page_${theme}`}>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
