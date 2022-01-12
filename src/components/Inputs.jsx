import { FormControl } from "react-bootstrap";

const InputText = ({ placeholder, onChange }) => {
    return (<FormControl
        onChange={e => onChange(e.target.value)}
        className="my-2"
        type="text"
        placeholder={placeholder}
        id={placeholder} />);
}

const InputPass = ({ onChange }) => {
    return (<FormControl
        onChange={e => onChange(e.target.value)}
        className="my-2"
        type="password"
        placeholder="password"
        id="password" />);
}

export { InputText, InputPass };