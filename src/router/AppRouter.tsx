import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/home/pages/Home';
import MainLayout from '../modules/shared/MainLayout/MainLayout';

const AppRouter = () => {

  return (
    <MainLayout>
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
    </MainLayout>
  );
};

export default AppRouter;
