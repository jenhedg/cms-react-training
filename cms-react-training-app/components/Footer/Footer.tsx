import Image from "next/image"
import logo from "assets/logo.png";
import styles from "../../styles/Footer.module.css";


export function Footer() {
    return (
        <footer className={styles.footer}>
                <Image src={logo} width={106} height={106} alt="Comic Closet" />
                <nav className={styles["footer__nav"]}>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <span>|</span>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </nav>
                <p className={styles.footer__legal}>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
        </footer>
    )
}