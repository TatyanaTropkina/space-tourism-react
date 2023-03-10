import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Tecnology/Technology";

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
                <Route path="/Crew" element={<Crew crewPage={props.state.crewPage}/>}/>
                <Route path="/Technology" element={<Technology techPage={props.state.techPage}/>}/>

                {/*<Route path="/Technology" element={<Technology techPage={props.state.techPage}/>}/>*/}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
