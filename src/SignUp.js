import './App.css';
import {TextInput} from "@mantine/core";

function SignIn() {
    return (
            <TextInput
                placeholder="Your name"
                label="Full name"
                withAsterisk
            />
    );
}

export default SignIn;
