import ComicDetail from "./ComicDetail"
import Image from "next/image";
import Button from "./Button"
import styles from "../styles/Comics.module.css";


export default function Comic({comic}) {

    return (
        <article className={styles["comic-item"]}>
             <div className={styles["comic-item-inner"]}>
                <div className={styles["comic-img-cont"]}>
                    <Image
                        src={comic.thumbnail}
                        alt={`${comic.title} poster`}
                        fill
                        className={styles["comic-img"]}
                    />
                    <Button></Button>
                </div>
                <h2>{comic.title}</h2>
                <ComicDetail
                    issueNumber={comic.issueNumber}
                    publishDate={comic.publishDate}
                    creators={comic.creators}>
                </ComicDetail>
            </div>
        </article>
    )
}



