import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Pager.module.css';
import { PagerProps }  from '../../types/shared_types';

export const Pager = ({ display, prevPage, nextPage }: PagerProps) => {
	return (
		<div className={styles["pager"]}>
			<button
				onClick={() => prevPage()}
				className={styles["prev"]}>
				<FontAwesomeIcon icon="angle-left"/>
			</button>
			<span>{display}</span>
			<button
				onClick={() => nextPage()}
				className={styles["next"]}>
				<FontAwesomeIcon icon="angle-right"/>
			</button>
		</div>
	);
};