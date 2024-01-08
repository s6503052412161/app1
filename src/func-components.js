import React from 'react'

export function Header(){
        const aStyle = {
            display:'inline-block',
            color:'blue',
            margin:'7px',
            textDecoration:'none'
           
        }
        return(
            <div style={{backgroundColor:'#ccc',fontSize:'20px'}}>
                <a href='#' style={aStyle} >Home</a> |&nbsp;
                <a href='#' style={aStyle} >React</a> |&nbsp;
                <a href='#' style={aStyle} >ReactNative</a> |&nbsp;
            </div>
        )
}

export function Content(){
    const bStyle = {
        display:'center',
        color:'black',
        textAlign:'Center',
    }
    return(
        <div>
            <br/><br/><br/>
            <h2 style={bStyle}>Welcome! To React & ReactNative</h2>
            <h2 style={bStyle}>To day to leaning ReactNative</h2>
            <br/><br/><br/>
        </div>
    )
}

export const Footer = () => {
    return(
        <div style={{textAlign:'center',color:'black',fontSize:'20px'}}>
            &copy; {new Date().getFullYear()} All right reserved
        </div>
    )
}