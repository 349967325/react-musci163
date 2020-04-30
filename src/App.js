import React from 'react';
import './App.css';

import GlobalHeader from './componetns/global-header/index'

function App() {
  return (
    <div className="App">
      <div>
        <GlobalHeader />
      </div>

      <div>
        单页内容
      </div>

      <div>页面Footer</div>
    </div>
  );
}

export default App;
