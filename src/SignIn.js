import './App.css';
import {TextInput} from "@mantine/core";
import {useRef, useState} from "react";

const submitt = (e, p) => {
    // setEmail(emailRef.current.value)
    // setPassword(passRef.current.value)
    // console.log(e)
    console.log(e, p)
}

function SignIn(submit) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const onSubmit = (e) => {
        setEmail(emailRef.current.value)
        setPassword(passRef.current.value)
        // console.log(e)
        // console.log(emailRef.current.value, passRef.current.value)
    }

    return (
        <>
            <input ref={emailRef} type="email"/>
            <input ref={passRef} type="password"/>
            {/*<button type='submit'> submit </button>*/}
            {/*<button onClick={(e) => onSubmit(e)}> ENTER </button>*/}
            <button onClick={(e) => onSubmit(emailRef.current.value, passRef.current.value)}> ENTER </button>
        </>
    );
}

export default SignIn;
