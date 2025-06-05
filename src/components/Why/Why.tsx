import { boxesAdvantages } from "../../constants/Advantage";
import Box from "../Box/Box";
import styles from './Why.module.scss';
const Why = () => {
    return(
        <section className={styles.boxSection}>
            <h2>Why Boxy</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <div className={styles.boxes}>
                {boxesAdvantages.map(item => <Box item={item}/>)}
            </div>
        </section>
    )
}
export default Why;