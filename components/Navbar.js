import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>

        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/prenatal">Pre Natal</Link>
            </li>
            <li className={styles.item}>
                <Link to="/sifilisehiv">Sífilis e Hiv</Link>
            </li>
            <li className={styles.item}>
                <Link to="/odontologia">Odontologia</Link>
            </li>
            <li className={styles.item}>
                <Link to="/citopatologico">Citopatologico</Link>
            </li>
            <li className={styles.item}>
                <Link to="/hipertensao">Hipertensão</Link>
            </li>
            <li className={styles.item}>
                <Link to="/diabetes">Diabetes</Link>
            </li>
        </ul> 

        </nav>
    )
}

export default Navbar