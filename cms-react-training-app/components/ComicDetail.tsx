export default function Details(comic) {
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
        const date = new Date(comic.publishDate);
        const month = monthNames[date.getMonth()];
        const dateNumber = date.getDate();
        const year = date.getFullYear();
        return `${month} ${dateNumber}, ${year}`;
    };

    const getCreators = () => {
        const creatorsArray = comic.creators.items.map((creator) => {
            return creator.name;
        });
        const formatCreators =
            creatorsArray.length > 0 ? creatorsArray.join(", ") : ["N/A"];
        return formatCreators;
    };

    return (
        <ul>
            <li>Issue:{comic.issueNumber}</li>
            <li>Published: {getPubDate()}</li>
            <li>Creators: {getCreators()}</li>
        </ul>
    )
}