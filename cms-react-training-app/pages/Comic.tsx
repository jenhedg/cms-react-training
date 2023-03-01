import ComicDetail from "./ComicDetail"

export default function Comic({comic}) {

const comicStyles = {
    fontFamily: "Helvetica"
}

    return (
        <article style={comicStyles}>
            <div>
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



