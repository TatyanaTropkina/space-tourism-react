import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Tecnology/Technology";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
  return (

      <BrowserRouter>
        <div className="App">
          <div className="app-wrapper">
            <Header/>
            <div className="content">
              <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Destination/*" element={<Destination destinationPage={props.state.destinationPage} />}/>
                <Route path="/Crew" element={<Crew/>}/>
                <Route path="/Technology" element={<Technology/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
