import styles from "../../styles/Button.module.css";

type Props = {
    onClick: () => void;
};

export default function Button({onClick}): Props {
	// const { favorites }:{ favorites: {} } = useAppContext();

    return (
        <button
            className={styles.comicButton}
			onClick={onClick}
        >
        </button>
    );
}