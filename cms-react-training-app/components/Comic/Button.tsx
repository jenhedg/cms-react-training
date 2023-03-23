import styles from "../../styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    onClick: () => void;
};

export default function Button({onClick}): Props {

    return (
        <button
            className={styles.comicButton}
			onClick={onClick}
        >
        <FontAwesomeIcon icon="bolt-lightning" />
        </button>
    );
}