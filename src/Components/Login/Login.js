import React, { useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

function Login() {
    const [user, setUser] = useState({
        isSignedIn: false,
        text: '',
        email: '',
        password: '',
        // error: ''
    })
    const [newUser, setNewUser] = useState({
        error: '',
        success: false

    })
    const [addUser, setAddUser] = useState(false);
    const handleForm = (e) => {
        if (addUser && user.email && user.password) {

            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setNewUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setNewUser(newUserInfo);
                });
        }
        if (!addUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setNewUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setNewUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const handleField = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isFieldValid);
        }
        if (e.target.name === "password") {
            isFieldValid = e.target.value.length > 6;
            isFieldValid = /\d{1}/.test(e.target.value);
            // console.log(isFieldValid);
            // console.log(isFieldValid);
        }
        if (isFieldValid) {
            const updateUserInfo = { ...user };
            updateUserInfo[e.target.name] = e.target.value;
            setUser(updateUserInfo);
        }
    }
    return (

        <div>
            <form onSubmit={handleForm}>

                <div className="container2">

                    <h6 style={{ color: "red" }}>{newUser.error}</h6>
                    {newUser.success && <h6 style={{ color: "green" }}>Account {addUser ? "Created": "Logged In"} Successfully</h6>}
                    <h1>Register</h1>
                    <input type="checkbox" name="addUser" onChange={() => setAddUser(!addUser)} id="" />
                    <label htmlFor="addUser">Sign Up</label>
                    {addUser && <input onBlur={handleField} name="text" className="input" type="text" placeholder="Enter Your Name" required />}
                    <input onBlur={handleField} name="email" className="input" type="text" placeholder="Enter Email" required />
                    <input onBlur={handleField} name="password" className="input" type="password" placeholder="Enter Password" required />

                    <p>By creating an account you agree to our <a href="https://www.npmjs.com/package/firebase">Terms & Privacy</a>.</p>
                    {addUser &&<input className="form-btn" type="submit" value="Sign Up" />}
                    {!addUser &&<input className="form-btn" type="submit" value="Log In" />}
                </div>

                {/* <div className="container2 signin">
                    <p>Already have an account? <button >Sign in</button>.</p>
                </div> */}
            </form>
        </div>



    );
}

export default Login;