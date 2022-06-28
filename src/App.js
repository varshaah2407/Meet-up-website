import React from 'react';
import {Route, Routes} from "react-router-dom";
// import { Route, Switch } from "react-router";
//In react-router-dom v6, "Switch" is replaced by routes "Routes"

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from './components/layout/Layout';

function App() {

  // return(
  //   <h1>Hello</h1>
  // )

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage/>} />
        <Route exact path="/new-meetup" element={<NewMeetupsPage/>} />
        <Route exact path="/favourites" element={<FavouritesPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
