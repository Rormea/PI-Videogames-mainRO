import './App.css';
import { Landing, Home, Form, Detail, Favorites } from "./wiews/index"
import NavBar from './components/NavBar/NavBar';
import { Route, useLocation } from "react-router-dom";


function App() {

  const location = useLocation();
  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/form" render={() => <Form />} />
      <Route exact path="/favorites" render={() => <Favorites />} />
      <Route exact path="/detail:id" render={() => <Detail />} />
      {/* <Route path="*" component={NotFound} /> */}


    </div>
  );
}

export default App;
