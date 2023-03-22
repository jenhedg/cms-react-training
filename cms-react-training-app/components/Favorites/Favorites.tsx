import { useAppContext } from "state/AppContext";
import { ComicData } from '../../types/shared_types';
import Image from "next/image";
import styles from "../../styles/Favorites.module.css";



export function Favorites() {
    const { favorites, toggleFavorite } = useAppContext();
	const favoritesArr: ComicData[] = Object.values(favorites);

        return (
            <div className={styles.favorites}>
                <h3 className={styles.favorites__title}>Favorites</h3>
                {favoritesArr.length ? (
                    <div className={styles.favorites__inner}>
                        {favoritesArr.map(item =>
                            <div key={item.id} className={styles.favorites__item}>
                                <div className={styles["favorites__content--img"]}>
                                    <button
                                        onClick={() => toggleFavorite({ id: item.id })}
                                        className={styles.favorites__btn}
                                    >
                                        <i className="fas fa-times-circle"></i>
                                    </button>
                                    <Image
                                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                        alt={item.title}
                                        width={50}
                                        height={75}
                                        className={styles.favorites__img}
                                    />
                                </div>
                                <div className={styles["favorites__content--text"]}>
                                    <h4>{item.title}</h4>
                                    <p><span>Issue:</span> {item.issueNumber}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <p className={styles["favorites--noFaves"]}>Select comics to save!</p>
                )}
            </div>
        );
}
