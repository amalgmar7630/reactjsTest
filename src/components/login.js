import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

const Login = () =>{
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [required, setRequired] = useState(false)
    const onSubmitLogin = (e) =>{
        e.preventDefault()
        if (email==='test@test.com' && password==='test') {
            setRequired(false)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            history.push("/home")
        } else {
            setRequired(true)
        }

    }
    const onAddEmail= (e)=>{
        setEmail(e)
    }
    const onAddPassword= (e)=>{
        setPassword(e)
    }
    return (
        <div className="mt-5 w-75 mx-auto">
            <form className="w-50 mx-auto" onSubmit={onSubmitLogin}>

                <h3>Log in</h3>
                { required ?
                    <h6 className="color-required">Email or Password are incorrect</h6>:
                    ''
                }
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=> onAddEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=> onAddPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                    Sign in
                </button>
            </form>
        </div>

    )
}
export default Login;
