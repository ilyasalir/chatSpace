import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {

    const [err,setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            setErr(true);
        }
        
    }
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Space</span>
                <span className="tittle">Masuk</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Masuk</button>
                    {err && <span>Login Gagal!!!</span>}
                </form>
                <p className>Belum punya akun? <Link to='/register'>Daftar</Link></p>
            </div>
        </div>
    )
}

export default Login;