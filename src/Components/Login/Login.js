import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

function Login() {
    const [user, setUser] = useState({
        isSignedIn: false,
        text: '',
        email: '',
        password: '',
        error: '',
        success: false
        // error: ''
    })
    // const [newUser, setNewUser] = useState({


    // })
    const [addUser, setAddUser] = useState(false);
    const handleForm = (e) => {
        if (addUser && user.email && user.password) {

            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    userUpdateInfo(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!addUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
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

    const userUpdateInfo = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    return (

        <div>
            <form onSubmit={handleForm}>

                <div className="container2">
                    {/* <h4>{loggedInUser.name}</h4> */}

                    <h6 style={{ color: "red" }}>{user.error}</h6>
                    {user.success && <h6 style={{ color: "green" }}>Account {addUser ? "Created" : "Logged In"} Successfully</h6>}
                    <h1>Register</h1>
                    <input type="checkbox" name="addUser" onChange={() => setAddUser(!addUser)} id="" />
                    <label htmlFor="addUser">Sign Up</label>
                    {addUser && <input onBlur={handleField} name="text" className="input" type="text" placeholder="Enter Your Name" required />}
                    <input onBlur={handleField} name="email" className="input" type="text" placeholder="Enter Email" required />
                    <input onBlur={handleField} name="password" className="input" type="password" placeholder="Enter Password" required />

                    <p>By creating an account you agree to our <a href="https://www.npmjs.com/package/firebase">Terms & Privacy</a>.</p>
                    {addUser && <input className="form-btn" type="submit" value="Sign Up" />}
                    {!addUser && <input className="form-btn" type="submit" value="Log In" />}
                </div>

                <div className="google-btn">
                    <button onClick={handleGoogle}>Sign In With Google</button>
                </div>
            </form>
        </div>



    );
}

export default Login;