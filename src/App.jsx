import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import HomeContainer from "./components/HomeContainer"
import HousesContainer from "./components/HousesContainer"
import HouseDetailContainer from "./components/HouseDetailContainer"
import Wizards from "./components/Wizards"
import Elixirs from "./components/Elixirs"
import Ingredients from "./components/Ingredients"
import Spells from "./components/Spells"
import Feedback from "./components/Feedback"
import './components/components.css'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomeContainer/>}/>
          <Route exact path='/houses' element={<HousesContainer/>}/>
          <Route exact path='/houses/:id' element={<HouseDetailContainer/>}/>
          <Route exact path='/wizards' element={<Wizards/>}/>
          <Route exact path='/elixirs' element={<Elixirs/>}/>
          <Route exact path='/ingredients' element={<Ingredients/>}/>
          <Route exact path='/spells' element={<Spells/>}/>
          <Route exact path='/feedback' element={<Feedback/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

