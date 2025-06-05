import empower from '../../assets/empower.png';
import Button from '../Button/Button';
import styles from './Empower.module.scss';
const Empower = () => {
    return (
        <section className={styles.empowerSection}>
            <div className={styles.empowerInfo}>
                <h1>Empower Fighters and Elevate You: Boxy's Seamless Booking for a Cause</h1>
                <p>Thunder Stunt
                    Welcome to Boxy, your premier portal for booking private lessons, 
                    and seminars with top-notch local fighters. Make an impact while 
                    refining your skills, knowing that every booking not only propels 
                    fighters towards their dreams but also sustains your favorite gyms.
                </p>
                <div className={styles.buttons}>
                    <Button link={'/'}text={"Book a fighter"}/>
                    <Button link={'/'}text={"Book a Gym Trainer"}/>
                </div>
            </div>
            <img src={empower} alt="empower" />
        </section>
    )
}
export default Empower;