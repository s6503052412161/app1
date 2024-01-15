import React from 'react';
import {Header,Content,Footer} from './func-components';
import Calendar from './class-components';
import Button from './class-components2';
import { EventData } from './event-data';
import { Calculator } from './calculator';
import { Table } from './event-data2';
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
    <Table/>
    <br/>
    <br/>
    
    <Footer/>
    </>
    
  )
}


export default App;
