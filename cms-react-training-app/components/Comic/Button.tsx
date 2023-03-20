import styles from "../../styles/Comics.module.css";
import { useAppContext } from "state/AppContext";

type Props = {
	onClick: () => void;
};

export default function Button({onClick}): Props {
	const { favorites }:{ favorites: {} } = useAppContext();

    return (
        <button
            className={`${styles["comic-button"]}`}
			onClick={onClick}
        >
        </button>
    );
}