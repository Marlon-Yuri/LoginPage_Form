import React, { useState } from 'react'
import LoginForm from './components/LoginForm'

export default function App() {

 const adminUser = {
  email: 'dandaro.nogueira@gmail.com',
  password: 'marlonlindo'
 }

 const [user, setUser] = useState({name:'', email:''})

 const [erro, setErro] = useState('')

const Login = infos=>{
 console.log(infos)

 if(infos.email === adminUser.email && infos.password === adminUser.password){
  setUser({name: infos.name, email: infos.email})
 }
 else{
  setErro('Digite senha e email válidos')
 }
}

const Logout = ()=>{
  console.log('Deslogou')
  setUser({name:'', email:''})
}

  return (
    <>
      {(user.email !== '') ? (
        <>
        <h1>Hi {user.name}</h1>
        <button onClick={()=>{Logout()}}>Logout</button>
        </>
      ) : (<LoginForm Login={Login} erro={erro}/>)}
    </>
  )
}
