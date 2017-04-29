import React from 'react';
import Logo from './Logo';
import Signin from './Signin';


class Header extends React.Component{
  render(){
    let styles = {
      background: '#000',
      height: '50px',
      width: '100%'
    }

    return(
      <div style = {styles} >
        <Logo />
        <Signin />
      </div>
    )
  }
}
export default Header;
