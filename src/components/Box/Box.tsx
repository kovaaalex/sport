import type { Advantage } from "../../constants/Advantage";
import styles from './Box.module.scss';
const Box = ({ item }: { item: Advantage }) => {
    return(
        <div className={styles.box}>
            <div className={styles.boxImage}>
                <img src={item.img} alt={item.name} />
            </div>
            <div className={styles.totalDescription}>
                <h4>{item.name}</h4>
                <p className={styles.advantageDescription}>{item.description}</p>
            </div>
        </div>
    )
}
export default Box;