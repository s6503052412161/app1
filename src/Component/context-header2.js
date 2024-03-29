import React from 'react';
import { userContext } from './context';

export default class Header2 extends React.Component {
  static contextType = userContext;

  render() {
    const [ user, setUser ] = this.context;

    const headerStyle = {
      backgroundColor: '#cee',
      textAlign: 'center',
      padding: 10,
      margin:10
    };

    const onClickSignout = (event) => {
      event.preventDefault();
      setUser('');
    };

    const onClickSignin = (event) => {
      event.preventDefault();
      setUser(' Sappawat Runegrangsan'); // Replace 'YourUsername' with your actual logic for setting the user
    };

    return (
      <div style={headerStyle}>
        <a href="/">Home</a>&nbsp;-&nbsp;
        <a href="/product">Product</a>&nbsp;-&nbsp;
        <a href="/contact">Contact Us</a>&nbsp;-&nbsp;&nbsp;
        { (user)
          ?<span>
            [{user}&nbsp;:&nbsp;<a href="/" onClick={onClickSignout}>SignOut</a>]</span>
        : 
          <span>
            [<a href="/" onClick={onClickSignin}>SignIn</a>]
          </span>
        }
      </div>
    )
  }
}
