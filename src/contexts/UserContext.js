import React from 'react';

import todoAPI from '../todoAPI';

const {Provider,Consumer} = React.createContext();

class UserProvider extends React.Component{

  login = async (username, password) => {
    try{
      // 로그인 요청
      const res = await todoAPI.post('/users/login', {
        username: username,
        password: password
      });
  
      // localstorage 토큰 저장
      localStorage.setItem('token', res.data.token);
    } catch(e){
        if(e.response && e.response.status === 400){
          alert('아이디 혹은 비밀번호가 일치 하지 않습니다.');
      }
    }
  }

  logout = () => {
    localStorage.removeItem('token');
  }

  render(){
    const value = {
      login: this.login,
      logout: this.logout
    }
    return(
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {UserProvider, Consumer as UserConsumer};