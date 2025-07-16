type Props = {
    label: string;
    placeholder: string;
    value: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: Props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0px 20px 15px 20px' }}>
            <label style={{ fontWeight: 700 }}>
                {props.label}
                {props.required && <span style={{ color: '#262668' }}> *</span>}
            </label>
            <textarea
                style={{ padding: 15, resize: 'none'}}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onChange={props.onChange}
                rows={6}
            >
            </textarea>
        </div>
    )
}

export default TextArea;