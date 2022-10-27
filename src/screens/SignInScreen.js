import { useRef } from 'react'
import './SignInScreen.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const SignInScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        console.log(emailRef.current.value)
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className='signinScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button onClick={signIn} type='submit'>Sign In</button>
                <h4><span className='signinScreen__gray'>New to Netflix? </span><span onClick={register} className='signinScreen__link'>Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen