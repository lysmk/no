import React from 'react';
import './App.scss';
import Lisini from './Lisini';
import { Header, LisiniFlex } from './Lisini.style';
import Card from './Card';

function App() {
  const obj = [
    { icon: 'N2', text: 'N2日本語能力試験合格' },
    { icon: 'TS', text: 'TypeScript React' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header>
          <Lisini />
        </Header>
        <LisiniFlex>
          {obj.map((item, i) => (
            <Card token={item.icon} text={item.text} key={i} />
          ))}
        </LisiniFlex>
      </header>
    </div>
  );
}

export default App;
