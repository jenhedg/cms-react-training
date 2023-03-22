
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState, useEffect } from 'react'
import { ComicData } from "../../types/shared_types";
import fetchComicsData from "@/hooks/fetchComicsData";
import { usePager } from '@/hooks/usePager';
import Comic from "../Comic/Comic"
import  { Pager }  from "../Pager/Pager";
import styles from "../../styles/Comics.module.css";

export default function ComicsIndex() {
    const { isLoading, data, serverError, total, fetchData} = fetchComicsData();

    const [currentPage, setCurrentPage] = useState(1);
    const [offset, end, pageDisplay] = usePager(total, currentPage);

    const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
    const nextPage = () => end !== total && setCurrentPage(currentPage + 1);

    useEffect( () => {
        fetchData(currentPage)
        console.log("test");
	}, [currentPage]);

    return (
        <div className={styles["comics"]}>
            { isLoading ? (
                <div className={styles["comics__fallback"]}>
                    <div>Loading...</div>
                </div>
            ) : serverError ? (
                <div> Error fetching comics</div>
            ) : (
                <div>
                    <div className={styles["comics__fallback"]}>
                        <ul className={styles["comics-list"]}>
                            {data?.results?.map(( comic : ComicData) => {
                                return (
                                    <Comic key ={comic.id} comicData={comic}/>
                                )
                            })}
                        </ul>
                    </div>
                        {!isLoading && (
                            <Pager
                                prevPage={prevPage}
                                nextPage={nextPage}
                                display={`${pageDisplay}`}
                            />
                        )}
                </div>
            )}
        </div>
    )
}

