import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from '../modules/home/pages/Movie';
import MainLayout from '../modules/shared/MainLayout/MainLayout';

const AppRouter = () => {

  return (
    <MainLayout>
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movie />}>
      </Route>
    </Routes>
  </BrowserRouter>
    </MainLayout>
  );
};

export default AppRouter;
