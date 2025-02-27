import './App.css';
import NavBar from './componens/NavBar/NavBar';
import { Routes , Route } from 'react-router-dom';
import Shop from './componens/Pages/Shop'
import Men from './componens/Pages/Men';
import Women from './componens/Pages/Women';
import KidsSection from './componens/Pages/KidsSection';




function App() {
  return (
    <div className="App">
     <NavBar />
        <Routes>
          <Route path='/' element = {<Shop/>} ></Route>
          <Route path='men' element = {<Men/>} ></Route>
          <Route path='women' element = {<Women/>} ></Route>
          <Route path='kids' element = {<KidsSection/>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
