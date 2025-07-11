type Props = {
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
}

const Input = (props: Props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0px 20px 15px 20px' }}>
            <label style={{ fontWeight: 700 }}>
                {props.label}
                {props.required && <span style={{ color: '#262668' }}> *</span>}
            </label>
            <input style={{ padding: 15 }} placeholder={props.placeholder} required={props.required} type={props.type}></input>
        </div>
    )
}

export default Input;