import MainLayout from 'layouts/MainLayout/MainLayout';
import Home from 'pages/HomePage/HomePage';
import MovieDetails from 'pages/MovieDetailsPage/MovieDetailsPage';
import Movies from 'pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
