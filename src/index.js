import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <>
        <SignIn props/>
        <SignUp />
    </>
    // </React.StrictMode>
);
