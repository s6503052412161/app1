import React from "react";

export default function Home(){
    return(
        <p style={{textAlign:'center'}}>
            <h3>Welcome to React Store</h3>
            Name <a href="/product">Products </a>We have to sale
            <br/>
            But your should be <a href="/member">Member </a>to buy them<br/>
            if you have a Question <a href="/contact">Contact Us</a>
        </p>
    )
}