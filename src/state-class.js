import React,{useState} from "react";

export default function MessageBox(){
    let[text, setText] = useState('Hi! How Are You To Day')
    let[size, setSize] = React.useState(16)

    const onClickSetText = () => {
        let t = prompt('Input Your Text')
        if(t){
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newSize = size+1
        setSize(newSize)
    }

    let msgboxStyle={
        display: 'inline-block',
        width:350,
        fontSize:size,
        backgroundColor: '#ccc',
        padding:5,
        textAlign:'center'
    }
    return(
        <div style={{textAlign:'center',marginTop:20}}>
            <div style={msgboxStyle}>{text}</div><br/><br/>
            <button onClick={onClickSetText}>Text</button>&nbsp;
            <button onClick={onClickZoomIn}>AddFontSize</button>&nbsp;
            <button onClick={() => setSize(size-1)}>ReduceFontSize</button>&nbsp;
        </div>
    )
}

