import React from 'react';
import {Header,Content,Footer} from './func-components';
import Calendar from './class-components';
import Button from './class-components2';
import { EventData } from './event-data';
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
    <EventData/>
    <br/>
    <br/>
    <Footer/>
    </>
    
  )
}


export default App;
