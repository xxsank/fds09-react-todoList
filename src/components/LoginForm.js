import React from 'react';

export default class LoginForm extends React.Component{
  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleLoginClick = async e => {
    const  {onLogin} = this.props;
    onLogin(this.state.username, this.state.password);
  }

  render(){
    const {onLogin} = this.props;
    const {username,password} = this.state;
    return(
      <div>
        <h1>로그인 페이지</h1>
        <label>
          아이디:
          <input type="text" value={username} onChange={this.handleUsernameChange}/>
        </label>
        <label>
          비밀번호:
          <input type="password" value={password} onChange={this.handlePasswordChange}/>
        </label>
        <button onClick={this.handleLoginClick}>로그인</button>
      </div>
    )
  }
}