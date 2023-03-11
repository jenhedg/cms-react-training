import ComicDetail from "./ComicDetail"
import Image from "next/image";
import Button from "./Button"
import styles from "../styles/Comics.module.css";

type Props = {
    children: React.ReactNode
    comic: any,
    thumbnail: {path: string, extension: string},
    title: string,
    issueNumber: number,
    creators: []
}

export default function Comic({comic, thumbnail, title, issueNumber, creators }: Props) {

    return (
        <article className={styles["comic-item"]}>
             <div className={styles["comic-item-inner"]}>
                <div className={styles["comic-img-cont"]}>
                    <Image
                        src={`${thumbnail.path}.${thumbnail.extension}`}
                        alt={`${title} poster`}
                        fill
                        className={styles["comic-img"]}
                    />
                    <Button></Button>
                </div>
                <h2>{title}</h2>
                <ComicDetail
                    issueNumber={issueNumber}
                    publishDate={comic.dates[0].date}
                    creators={creators}>
                </ComicDetail>
            </div>
        </article>
    )
}



