import { Creator, CreatorItem } from "../types/shared_types";

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
        <ul>
            <li>Issue:{issueNumber}</li>
            <li>Published: {getPubDate()}</li>
            <li>Creators: {getCreators()}</li>
        </ul>
    )
}