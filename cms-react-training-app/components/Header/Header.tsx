import Image from "next/image"
import logo from "assets/logo.png";
import styles from "../../styles/Header.module.css";
import { useAppContext } from "state/AppContext";
import AppContextProvider  from "../../state/AppContext";


export function Header() {
	const { favorites } = useAppContext();

    return (
        <header className={styles.header}>
            <div className={styles.headerWrap}>
                <Image src={logo} width={106} height={106} alt="Comic Closet" />
                <div className={styles.headerContent}>
                    <nav className={styles.navContent}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </nav>
                    <div className={styles.faves}>
                        <button className={styles.favesBtn}>My Favorites</button>
                        <span className={styles.favesCounter}>
                            ({Object.keys(favorites).length})
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}