import React, { useState } from 'react'
import styled from 'styled-components'

const FormBox = styled.div`

`

export default function LoginForm({Login, erro }) {

    const [infos, setInfos] = useState({name:'', email:'', password:''})


    const handleSubmit = (e)=>{
        e.preventDefault()

        Login(infos)
    }

  return (
    <form onSubmit={handleSubmit}>
        <>
        <h2>Login</h2>
        <FormBox>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' value={infos.name} onChange={e =>{setInfos({...infos, name: e.target.value})}}/>
        </FormBox>

        <FormBox>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' value={infos.email} onChange={e =>{setInfos({...infos, email: e.target.value})}}/>
        </FormBox>

        <FormBox>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' value={infos.password} onChange={e =>{setInfos({...infos, password: e.target.value})}} />
        </FormBox>
        <input  type='submit' />

        {erro !== '' ? <div>{erro}</div> :""} 
        </>
    </form>
  )
}
