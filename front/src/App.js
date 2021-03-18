import React from 'react';
import './App.css';
import Header from './comp/header'
import AddForm from './comp/addForm'
import List from './comp/list'
import {Provider} from './context'

function App() {
  return (
    <Provider>
        <div className="app-container">
          <Header/>
          <AddForm/>
          <List/>
       </div>
    </Provider>
    
  );
}

export default App;
