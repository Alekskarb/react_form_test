import './App.css';
import { Select, Slider, Switch, TextInput} from "@mantine/core";
import {useState} from "react";
import {IconAt} from "@tabler/icons-react";

function SignIn() {
    const [name,  setName] = useState('Your name')
    const [full,  setFull] = useState('Full name')
    const [frame,  setFrame] = useState('react')
    const [asterix,  setAsterix] = useState(false)
    const [disabled,  setDisabled] = useState(false)
    const [radius,  setRadius] = useState(25)
    const [size,  setSize] = useState(50)

    return (
        <>
            <TextInput
                placeholder="Your e-mail"
                label="Your e-mail" size={size} radius={radius / 5}
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
            <Select data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
            ]}
                    defaultValue='React' value={frame}
                placeholder="Variant"
                label="Variant" onChange={(item) => setFrame(item)}
            />
            <div className="mantine-Text-root"> Radius </div>
            {/*<Slider onChange={(event) => setRadius(event.target.checked)}*/}
            <Slider onChange={(value) => setRadius(value)} value={radius}
                    marks={[
                        { value: 0, label: 'xs' },
                        { value: 25, label: 'sm' },
                        { value: 50, label: 'md' },
                        { value: 75, label: 'lg' },
                        { value: 100, label: 'xl' },
                    ]}
            />
            <div className="mantine-Text-root"> Size </div>
            <Slider onChange={(e) => setSize(e)} value={size}
            /*<Slider onChange={(e) => console.log(e) } value={size}*/
            /*<Slider onChange={setSize} value={size}*/
                marks={[
                    { value: 20, label: '20%' },
                    { value: 40, label: '40%' },{ value: 60, label: '60%' },
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
