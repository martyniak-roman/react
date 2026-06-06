import { useState } from "react"
import Form from "../components/Form/Form"

const LoginPage = () => {
  
    const [username] = useState<string>('');
    const [password] = useState<string>('');

  return (
    <Form username={username} password={password} />
  )
}

export default LoginPage