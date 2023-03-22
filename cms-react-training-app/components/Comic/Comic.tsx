import ComicDetail from "./ComicDetail"
import Image from "next/image";
import Button from "./Button"
import styles from "../../styles/Comics.module.css";
import { ComicData } from "../../types/shared_types";
import  AppContextProvider, { useAppContext } from "../../state/AppContext";

type ComicDataProps = {
    comicData: ComicData,
}

export default function Comic({ comicData }: ComicDataProps) {
    if (!comicData) { return null;}

    const id = comicData.id;
    const title = comicData.title;
    const thumbnail = comicData.thumbnail;
    const issueNumber = comicData.issueNumber;


	const { toggleFavorite, favorites } = useAppContext();

	const faveClickHandler = () => {
        toggleFavorite({
            id,
            title,
            thumbnail,
            issueNumber
        });
	};

    return (
        <AppContextProvider>
            <article data-testid="comic" className={styles.comicItem}>
                <div className={styles.comicItemInner}>
                    <div className={styles.comicImgCont}>
                        <Image
                            src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                            alt={`${comicData.title} poster`}
                            width={183}
						    height={276}
                            className={styles.comicImg}
                        />
                        <Button onClick={faveClickHandler} favorited={id in favorites}/>
                    </div>
                    <div className={styles.comicDetailCont}>
                        <h2 data-testid="title">{comicData.title}</h2>
                        <ComicDetail
                            issueNumber={comicData.issueNumber}
                            publishDate={comicData.dates[0].date}
                            creators={comicData.creators}
                        />
                    </div>
                </div>
            </article>
        </AppContextProvider>
    )
}



