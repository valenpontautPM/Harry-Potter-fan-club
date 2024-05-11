import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar"
import HomeContainer from "./components/HomeContainer"
import HouseListContainer from "./components/HousesContainer"
import HouseDetailContainer from "./components/HouseDetailContainer"
import Wizards from "./components/Wizards"
import Elixirs from "./components/Elixirs"
import Ingredients from "./components/Ingredients"
import Spoils from "./components/Spoils"
import Feedback from "./components/Feedback"
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomeContainer/>}/>
        <Route exact path='/houses' element={<HouseListContainer/>}/>
        <Route exact path='/houses/:id' element={<HouseDetailContainer/>}/>
        <Route exact path='/wizards' element={<Wizards/>}/>
        <Route exact path='/elixirs' element={<Elixirs/>}/>
        <Route exact path='/ingredients' element={<Ingredients/>}/>
        <Route exact path='/spoils' element={<Spoils/>}/>
        <Route exact path='/feedback' element={<Feedback/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
