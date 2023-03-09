import Comic from "./Comic"
import styles from "../styles/Comics.module.css";
import fetchComicsData from "@/hooks/fetchComicsData";

export default function ComicsIndex() {
    const { isLoading, data, serverError } = fetchComicsData();

    return (
        <div>
            { isLoading ? (
                <div> Loading...</div>
            ) : serverError ? (
                <div> Error fetching comics</div>
            ) : (
                <ul className={styles["comics-list"]}>
                    {data?.map(( comic ) => {
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
                    })}
                </ul>
            )}
        </div>
    )
}

