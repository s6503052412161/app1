import React from 'react';
import './App.css';
import logo from './logo_kmutnb.png';
function App() {
  let r = '<b>React</b>'
  let rn = 'React Native'
  const el=(
    <div>
      Create Web & Moblie App<br/>
      wiht <span dangerouslySetInnerHTML={{__html: r}}/> & {rn}
    </div>
   )
  return el 

}


export default App;
