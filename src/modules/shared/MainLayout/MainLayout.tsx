import * as React from 'react';
import MainAppBar from '../components/MainAppBar/MainAppBar';
interface IMainLayout {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: React.FC<IMainLayout> = (props) => {
const {children} = props;
  return (
    <>
    <header>
        <MainAppBar />
    </header>
    <main>
        {children}
    </main>
    </>
  );
}

export default MainLayout;