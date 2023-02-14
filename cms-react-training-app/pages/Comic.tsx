// import Button from "./Button"
// import ComicDetail from "./ComicDetail"

export default function Comic({comic}) {

    return (
        <div>
           <li key={comic.id}>
                {comic.title}
           </li>
        </div>
    )
}



