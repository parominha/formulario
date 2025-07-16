import styles from './Button.module.css';

type Props = {
  texto: string;
  bgColor: boolean;
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: props.bgColor ? '#383A68' : 'transparent',
        color: props.bgColor ? '#ffffff' : '#383A68',
        border: props.bgColor ? 'none' : '1px solid #383A68'
      }}
      onClick={props.onClick}
    >
      {props.texto.toUpperCase()}
    </button>
  );
};

export default Button;
