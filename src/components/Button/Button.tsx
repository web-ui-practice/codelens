import styles from './Button.module.css';

type ButtonProps = {
 variant: 'primary' | 'secondary';
 children: React.ReactNode;
 onClick?: () => void;
};
    
function Button({ onClick, variant, children }: ButtonProps) {
    return(
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>{children}</button>
    )
}

export default Button;