import styles from './Button.module.scss';
interface ButtonProps {
    text: string,
    link: string
}
const Button = ({text, link}: ButtonProps) => {
    return(
        <a 
          href={link}
          className={styles.button}
        >
            {text}
        </a>
    )
}
export default Button;