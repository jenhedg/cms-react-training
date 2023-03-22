import Image from "next/image";
import styles from '../..//styles/Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Comic Closet
                    </h1>
                </div>
        </section>
    )
}