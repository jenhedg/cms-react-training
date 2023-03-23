import Filter from "./Filter";
import { CREATORS, CHARACTERS } from "Lib/filterData";
import styles from "styles/Filter.module.css";

export function FilterForm() {
	return (
		<form className={styles.container}>
			<h3 className={styles.title}>Filter by:</h3>
			<Filter name="creator" options={CREATORS} />
			<Filter name="character" options={CHARACTERS} />
		</form>
	);
}
