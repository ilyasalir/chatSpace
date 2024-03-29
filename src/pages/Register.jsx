import React, { useState } from "react";
import add from "../img/addAva.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage} from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
    const [err,setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            uploadTask.on(

            (error) => {
                setErr(true)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                await updateProfile(res.user,{
                    displayName,
                    photoURL:downloadURL,
                });
                
                await setDoc(doc(db, "users", res.user.uid),{
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL:downloadURL,
                })

                await setDoc(doc(db, "userChats", res.user.uid),{})
                navigate('/')
                });
            }
        );
        } catch (error) {
            setErr(true);
        }
        
    }

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Space</span>
                <span className="tittle">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={add} alt=""/>
                        <span>Tambahkan Avatar</span>
                    </label>
                    <button>Daftar</button>
                    {err && <span className="err">Daftar Gagal!!!</span>}
                </form>
                <p>Sudah punya akun? <Link to='/login'>Masuk</Link></p>
            </div>
        </div>
    )
}

export default Register;