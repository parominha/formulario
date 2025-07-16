type Props = {
    label: string;
    placeholder: string;
    value: string;
    type?: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0px 20px 15px 20px' }}>
            <label style={{ fontWeight: 700, color: '#222222' }}>
                {props.label}
                {props.required && <span style={{ color: '#383A68' }}> *</span>}
            </label>
            <input
                style={{ padding: 15 }}
                placeholder={props.placeholder}
                required={props.required}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                autoComplete="off"
            />
        </div>
    )
}

export default Input;