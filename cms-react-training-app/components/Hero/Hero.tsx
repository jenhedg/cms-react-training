import Image from "next/image";
import styles from '../..//styles/Hero.module.css';

export function Hero() {
    return (
        <section className={styles["hero"]}>
                <div className={styles["hero__content"]}>
                    <h1 className={styles["hero__content--title"]}>
                        Comic Closet
                    </h1>
                </div>
        </section>
    )
}