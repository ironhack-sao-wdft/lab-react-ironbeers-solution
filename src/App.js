import './App.css';


import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Beers from "./pages/beers"
import RandomBeer from "./pages/random-beer"
import NewBeer from "./pages/new-beer"
import Home from './pages/home'
import BeerDetails from './pages/beerDetails';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/beers"} element={<Beers />} />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
        <Route path={"/beers/:id"} element={<BeerDetails />} />
      </Routes>


    </div>
  );
}

export default App;
