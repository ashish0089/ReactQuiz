import React from 'react';
import './App.css';
import QuestionsConatiner from './QuestionsConatiner';
import SummaryPage from './SummaryPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path="/" component={QuestionsConatiner} exact />
       <Route path="/SummaryPage" component={SummaryPage} />
                
      </Switch>
          
      </header>
    </div>
  );
}



export default App;
