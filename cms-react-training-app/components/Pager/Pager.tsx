import styles from '../../styles/Pager.module.css';
import { PagerProps }  from '../../types/shared_types';

export const Pager = ({ display, prevPage, nextPage }: PagerProps) => {
	return (
		<div className={styles["pager"]}>
			<button
				onClick={() => prevPage()}
				className={styles["prev"]}>
                <i aria-hidden className="fas fa-angle-left"></i>
			</button>
			<span>{display}</span>
			<button
				onClick={() => nextPage()}
				className={styles["next"]}>
                <i aria-hidden className="fas fa-angle-right"></i>
			</button>
		</div>
	);
};