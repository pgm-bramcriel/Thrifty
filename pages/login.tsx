import React, { FormEvent, useState } from 'react'
import BaseLayout from '../layouts/BaseLayout'
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css'

const Login = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    document.cookie = "password=" + password;

    router.push('/admin');
  }

  return (
    <BaseLayout>
      <div className="secondary-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 form-group">
            <label htmlFor="password">Password</label>
            <input value={password} className="form-control" type="password" name="password" onChange={(e) => {
              setPassword(e.target.value);
            }}/>
            <button className="btn btn-danger mt-3" type="submit">Login</button>
          </div>
        </form>
        
      </div>
    </BaseLayout>
  )
}

export default Login