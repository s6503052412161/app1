import React from 'react';
import {Header,Content,Footer} from './func-components';
import Calendar from './class-components';
import Button from './class-components2';
 //import './index.css';
import { Calculator } from './calculator';
function App() {
  return(
    <>
    <Header/>
    <br/>
    <br/>
    <p><center><Calendar/></center></p>
    <Content/>
    <center><Button/></center>
    <br/>
    <br/>
    <Calculator/>
    <br/>
    <br/>
    <Footer/>
    </>
    
  )
}


export default App;
