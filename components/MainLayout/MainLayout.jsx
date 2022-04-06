import React from 'react';
import style from './MainLayout.module.scss';
import cn from 'classnames';

// !important
const MainLayout = ({ children }) => {
  const cnStyle = cn(style.content, style.container);
  return (
    <div className={style.wrapper}>
      <header className={style.header}>Header</header>
      <div className={cnStyle}>{children}</div>
      <footer className={style.footer}>Footer</footer>
    </div>
  );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
// !important
