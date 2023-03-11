type Props = {
    creators: [],
    issueNumber : number,
    publishDate : string | number,
    creator : {name: string},
}


export default function Details({creators, issueNumber, publishDate } : Props) {
    const getPubDate = () => {
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

    const getCreators = ()  => {
        const creatorsArray = creators.items.map((creator : {name: string}) => {
            return creator.name;
        });
        const formatCreators =
            creatorsArray.length > 0 ? creatorsArray.join(", ") : ["N/A"];
        return formatCreators;
    };

    return (
        <ul>
            <li>Issue:{issueNumber}</li>
            <li>Published: {getPubDate()}</li>
            <li>Creators: {getCreators()}</li>
        </ul>
    )
}