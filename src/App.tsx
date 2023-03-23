import React from 'react';
import './App.scss';
import {Menu} from '../src/components/menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GridView} from "./components/gridView";

function App() {

    const titles = ['SMB', 'Enterprise', 'Biotech', 'Textile Testing & Certification', 'Insurance', 'Transport & Logistics', 'Information Technology', 'otherTitle1', 'otherTitle2', 'otherTitle3', 'otherTitle4']

  return (
    <div className="App container">
        <Menu propTitles={titles}/>
        <GridView />
    </div>
  );
}

export default App;
