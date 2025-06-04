import headerLogo from '../../assets/headerLogo.png';
import loginLogo from '../../assets/loginLogo.png';
import styles from './Header.module.scss';
const Header = () => {
    return (
        <header className={styles.header}>
            <img src={headerLogo} alt="headerLogo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/chooseFighter">Choose Your Fighter</a></li>
                    <li><a href="/login">Login <img src={loginLogo} alt="loginLogo" /></a></li>
                    <li className={styles.contactLink}><a href="/contactUs">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;