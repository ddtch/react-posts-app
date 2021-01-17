import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React test app
      </header>

      <section>
        <Switch>
          <Route exact path="/posts/:id" component={PostPage}/>
          <Route exact path="/" component={MainPage}/>
        </Switch>
      </section>
    </div>
  );
}

export default App;
