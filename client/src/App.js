import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout'
import Header from './Header'
import SignInForm from './SigninForm';
import LoginForm from './LoginForm'
import { render } from '@testing-library/react';

export default function App() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")
  const [loggedIn,setLoggedIn]=useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`/api/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
        console.log("token sent", token)
        setLoggedIn(token)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`/api/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      setLoggedIn(token)
    }
    )
  }

  useEffect(()=>{

  },[loggedIn])


  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin} access={handleAuthClick}/>
        break;
      default:
        return <SignInForm handleLogin={handleLogin} access={handleAuthClick}/>
    }
  }

  return (
    <div className="App">
      { loggedIn ?
        <Layout token={loggedIn}/>
        :
        <div>
          <Header handleFormSwitch={handleFormSwitch}/>
          {
             renderForm()
          }
        </div>
    }

   </div>
    );
  }



