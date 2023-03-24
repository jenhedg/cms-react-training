import styles from "../../styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "state/AppContext";
import { ButtonProps } from "../../types/shared_types";

export default function Button({onClick, favorited}: ButtonProps) {
	const { favorites }:{ favorites: {} } = useAppContext();

    return (
        <button
            className={`${styles.comicButton} ${favorited ? styles.favorited : ""} ${
                Object.keys(favorites).length < 10 ? styles.hover : ""
            }`}
			onClick={onClick}
        >
        <FontAwesomeIcon icon="bolt-lightning" />
        </button>
    );
}