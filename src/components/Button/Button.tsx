import styles from './Button.module.css';

type ButtonProps = {
 variant: 'primary' | 'secondary';
 children: React.ReactNode;
};
    
function Button({ variant, children }: ButtonProps) {
    return(
        <button className={`${styles.button} ${styles[variant]}`}>{children}</button>
    )
}

export default Button;