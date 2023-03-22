import { Creator, CreatorItem } from "../../types/shared_types";
import styles from "@/styles/ComicDetail.module.css";


type DetailProps = {
    issueNumber: number,
    publishDate: string,
    creators: Creator
}

type getCreatorsFn = () => string;

type getPubDateFn = () => string;

export default function Details({ issueNumber, publishDate, creators }: DetailProps)  {
    const getPubDate: getPubDateFn = () => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const date = new Date(publishDate);
        const month = monthNames[date.getMonth()];
        const dateNumber = date.getDate();
        const year = date.getFullYear();
        return `${month} ${dateNumber}, ${year}`;
    };

    const getCreators: getCreatorsFn = () => {
        const creatorsGroup = creators.items.map((creator) => {
            return creator.name;``
        });
        const creatorsFormatted =
            creatorsGroup.length > 0 ? creatorsGroup.join(", ") : "N/A";
        return creatorsFormatted;
    };

    return (
        <ul className={styles.detail__list}>
            <li data-testid="issueNumber" className={styles.detail__item}><span>Issue:</span> {issueNumber}</li>
            <li data-testid="publishDate" className={styles.detail__item}><span>Published:</span> {getPubDate()}</li>
            <li data-testid="creators" className={styles.detail__item}><span>Creators:</span> {getCreators()}</li>
        </ul>
    )
}