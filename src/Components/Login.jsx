import React, { useState } from 'react'
// import axios from 'axios'

function Login() {
  const [error, setError] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      // const { data } = axios.get('https://jsonplaceholder.typicode.com/users/1')
      // setUser(data)
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => setUser(data))
        .then(() => console.log(user))



    } catch (error) {
      console.log(error)
      setError(true)
    }

  }

  
  return (

    <div className="container"> 
      <span>User: {user.name }</span>
      <form>
        <input type="text" placeholder='username' value={username} onChange={e=> setUsername(e.target.value) } />
        <input type="curent-password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button disabled={!username || !password} onClick={handleClick}>Login</button>
        <span style={{visibility: error ? "visible" : "hidden"}}>Something went wrong.</span>
      </form>
    </div>
  )
}

export default Login