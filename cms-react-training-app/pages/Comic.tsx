import ComicDetail from "./ComicDetail"
import Image from "next/image";
import Button from "./Button"

export default function Comic({comic}) {

const comicStyles = {
    fontFamily: "Helvetica"
}

    return (
        <article style={comicStyles}>
            <div>
                <div>
                    <Image
                        src={comic.thumbnail}
                        alt={`${comic.title} poster`}
                        height={400}
                        width={300}
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



