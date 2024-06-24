//Styles
import styles from './Button.module.css';

const Button = ({children, onClick, className}) => {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
