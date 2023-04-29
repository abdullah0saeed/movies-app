import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MoviesView from "./pages/MoviesView";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesView />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
