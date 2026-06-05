import { useEffect, useState } from "react"
import { login } from "../services/api.service"
import Form from "../components/Form/Form"

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //   login({
    //     username: username,
    //     password: password,
    //     expiresInMins: 1
    //   })
    // }, [])

  return (
    <Form username={username} password={password} />
  )
}

export default LoginPage