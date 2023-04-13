import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import SearchResults from './components/searchResults/SearchResults';

const App: React.FC = () => {
    return (
      <div className='App'>
        <Routes>
          <Route path='/searchResults' Component={SearchResults}></Route>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </div>
    );
};

export default App;
