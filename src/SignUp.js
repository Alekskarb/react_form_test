import './App.css';
import { Select, Slider, Switch, TextInput} from "@mantine/core";
import {useState} from "react";
import {IconAt} from "@tabler/icons-react";

function SignIn() {
    const [name,  setName] = useState('Your name')
    const [full,  setFull] = useState('Full name')
    const [asterix,  setAsterix] = useState(false)
    const [disabled,  setDisabled] = useState(false)

    return (
        <>
            <TextInput
                placeholder="Your e-mail"
                label="Your e-mail"
                withAsterisk={asterix} disabled={disabled}
                icon={<IconAt size="1rem" />} classNames='.mantine-Slider-root'
            />
            <TextInput
                placeholder="Placeholder"
                label="Your name"
                defaultValue={name}
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
            <Slider on
                marks={[
                    { value: 20, label: '20%' },
                    { value: 50, label: '50%' },
                    { value: 80, label: '80%' },
                ]}
            />
            <Switch
                label="Disabled" onChange={(event) => setDisabled(event.currentTarget.checked)}
            />
            <Switch
                label="With asteriks" onChange={(event) => setAsterix(event.currentTarget.checked)}
            />
        </>
    );
}

export default SignIn;
