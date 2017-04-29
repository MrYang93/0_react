import React from 'react';

class Signin extends React.Component{
  getStyle(){
    return {
      border: '3px solid #000',
      marginLeft : '100px'
    }
  }
  render(){
    let style = {
      leftbtn:{
        background: 'blue'
      },
      rightbtn:{
        background: 'red'
      }
    }
    return(
      <div>
        <button style = {style.leftbtn}>登陆</button>
        <button style = {style.rightbtn}>注册</button>
      </div>
    )
  }
}
export default Signin;
