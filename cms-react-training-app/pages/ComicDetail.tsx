export default function Details(comic) {
    return (
        <ul>
            <li>Issue:{comic.issueNumber}</li>
            <li>Published:{comic.publishDate}</li>
            <li>Creators:{comic.creators.map((creator) => creator.name).join(", ")}</li>
        </ul>
    )
}