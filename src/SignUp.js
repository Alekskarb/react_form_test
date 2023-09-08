import './App.css';
import {Select, TextInput} from "@mantine/core";
import {useState} from "react";

function SignIn() {
    const [name,  setName] = useState('Your name')
    const [full,  setFull] = useState('Full name')

    return (
        <>
            <TextInput
                placeholder="Placeholder"
                label="Your name"
                defaultValue={name}
                withAsterisk
            />
            <TextInput
                placeholder="Label"
                label="Full name"
                defaultValue={full}
            />
            <TextInput
                placeholder="Description"
                label="Description" disabled
            />
            <TextInput
                placeholder="Error"
                label="Error" disabled
            />
            <Select data={['Default']}
                placeholder="Variant"
                label="Variant"
                    // type="number" defaultValue='Default' classNames={{ input: '.mantine-TextInput-input' }}
            />
        </>
    );
}

export default SignIn;
