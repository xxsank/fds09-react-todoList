import React from 'react';

export default class LoginForm extends React.Component{
  
  loginEvent =  e => {
    e.preventDefault();
      const username =  e.target.elements.username.value
      const password =  e.target.elements.password.value
      const  {onLogin} = this.props;
      onLogin(username,password)
  }

  render(){
    const {onLogin} = this.props;
    // const {username,password} = this.state;
    return(
      <form onSubmit={this.loginEvent}>
        <h1>로그인 페이지</h1>
        <label>
          아이디:
          <input defaultValue="fdds" type="text" name="username"/>
        </label>
        <label>
          비밀번호:
          <input type="password" name="password" />
        </label>
        <button>로그인</button>
      </form>
    )
  }
}