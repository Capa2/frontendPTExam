import { FormControl, FormLabel } from "react-bootstrap";

const InputText = ({ label, placeholder, onChange }) => {
    return (
        <>
            {label && <FormLabel className="mt-2 ml-1">{label}</FormLabel>}
            <FormControl
                key={placeholder}
                onChange={e => onChange(e.target.value)}
                className="mb-2"
                type="text"
                placeholder={placeholder}
                id={placeholder} />
        </>
    );
}

const InputPass = ({ onChange }) => {
    return (<FormControl
        key="passwordInput"
        onChange={e => onChange(e.target.value)}
        className="mb-4"
        type="password"
        placeholder="password"
        id="password" />);
}

export { InputText, InputPass };