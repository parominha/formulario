import styles from './Button.module.css';

type Props = {
  texto: string;
};

const Button = (props: Props) => {
  return (
    <button className={styles.button}>
      {props.texto}
    </button>
  );
};

export default Button;
