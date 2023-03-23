import styles from "styles/Intro.module.css";

export function Intro() {
	return (
		<section className={styles.container}>
			<span className={styles.newComics}>New Comics!</span>
			<h2 className={styles.title}>Coming Out Daily</h2>
			<p className={styles.description}>
				Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a
				pharetra augue. Cum sociis natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
				vehicula ut id elit.
			</p>
		</section>
	);
}