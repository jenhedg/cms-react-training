import Comic from "./Comic"
import styles from "../styles/Comics.module.css";
// import fetchData from "hooks/fetchData";
import md5 from 'md5'

export default function ComicsIndex() {
    const baseUrl = `https://gateway.marvel.com/v1/public/comics`;
    const publicKey = `${process.env.apiKeyPublic}`;
    const privateKey = `${process.env.apiKeyPrivate}`;
    const timeStamp =  Date.now();
    const hashValue = md5(timeStamp + privateKey + publicKey);
    const url = `${baseUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}`;
    console.log(url);

    return (
        <div>
            <ul className={styles["comics-list"]}>
                {/* {comics.map(( comic ) => {
                    return (
                        <Comic
                            key={comic.id}
                            comic={comic}
                            issueNumber={comic.issueNumber}
                            publishDate={comic.publishDate}
                            creators={comic.creators}
                            thumbnail={comic.thumbnail}
                        >
                        </Comic>
                    )
                })} */}
            </ul>
        </div>
    )
}

