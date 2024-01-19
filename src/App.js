import React from 'react';
import {Header,Content,Footer} from './func-components';
import Calendar from './class-components';
import Button from './class-components2';
import { EventData } from './event-data';
import { Calculator } from './calculator';
import { Table } from './event-data2';
import {  RefsFunc } from './refs-func.js'; //ถ้าส่งออกแบบ Defalt ไม่ต้องมีปีกกา
function App() {
  return(
    <>
    <Header/>
    <br/>
    <p><center><Calendar/></center></p>
    <br/>
    <Content/>
    <br/><hr/>
    <h2 style={{textAlign:"center"}}>Button Alert</h2>
    <br/>
    <center><Button/></center>
    <br/><hr/><br/>
    <h2 style={{textAlign:"center"}}>Button Calculator</h2><br/>
    <Calculator/>
    <br/><hr/>
    <h2 style={{textAlign:"center"}}>EventData Button</h2><br/>
    <EventData/>
    <br/><hr/>
    <h2 style={{textAlign:"center"}}>EventData Table</h2><br/>
    <Table/>
    <br/>
    <hr/>
    <RefsFunc/>
    <br/>
    <hr/>
    <Footer/>
    </>
    
  )
}


export default App;
