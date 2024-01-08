import React from 'react';
import {Header,Content,Footer} from './func-components';
import Calendar from './class-components';
// import './sty.css';
function App() {
  return(
    <>
    <Header/>
    <br/>
    <br/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    </>
    
  )
}


export default App;
