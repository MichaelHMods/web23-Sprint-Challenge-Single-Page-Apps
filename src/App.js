import React from "react";
import {Route, Link} from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/Character" component={CharacterList}/>
      <Link to={"/Character"}>
        <button>Character List</button>
      </Link>
      
    </main>
  );
}
