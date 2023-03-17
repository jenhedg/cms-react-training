import Image from "next/image"
import logo from "assets/logo.png";
import styles from "../../styles/Header.module.css";


export function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["header__wrap"]}>
                <Image src={logo} width={106} height={106} alt="Comic Closet" />
                <div className={styles["header__content"]}>
                    <nav className={styles["nav"]}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </nav>
                    <div className={styles["faves"]}>
                        <button className={styles["faves__btn"]}>My Favorites</button>
                        <span className={styles["faves__counter"]}>( 3 )</span>
                    </div>
                </div>
            </div>
        </header>
    )
}