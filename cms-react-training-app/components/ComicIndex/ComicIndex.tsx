import Comic from "../Comic/Comic"
import styles from "../../styles/Comics.module.css";
import fetchComicsData from "@/hooks/fetchComicsData";
import { ComicData } from "../../types/shared_types";
import AppContextProvider  from "../../state/AppContext";

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
                        {data?.map(( comic : ComicData) => {
                            return (
                                <Comic key ={comic.id} comicData={comic}/>
                            )
                        })}
                    </ul>
                )}
            </div>
    )
}

