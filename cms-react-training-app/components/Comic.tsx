import ComicDetail from "./ComicDetail"
import Image from "next/image";
import Button from "./Button"
import styles from "../styles/Comics.module.css";
import { ComicData } from "../types/shared_types";


type ComicDataProps = {
    comicData: ComicData
}

export default function Comic({ comicData }: ComicDataProps) {

        if (!comicData) {
        return null;
    }

    return (
        <article data-testid="comic" className={styles["comic-item"]}>
             <div className={styles["comic-item-inner"]}>
                <div className={styles["comic-img-cont"]}>
                    <Image
                        src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                        alt={`${comicData.title} poster`}
                        fill
                        className={styles["comic-img"]}
                    />
                    <Button></Button>
                </div>
                <h2 data-testid="title">{comicData.title}</h2>
                <ComicDetail
                    issueNumber={comicData.issueNumber}
                    publishDate={comicData.dates[0].date}
                    creators={comicData.creators}
                />
            </div>
        </article>
    )
}



