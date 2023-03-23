
import { useState, useEffect } from 'react'
import { ComicData } from "../../types/shared_types";
import fetchComicsData from "@/hooks/fetchComicsData";
import { useAppContext } from "state/AppContext";
import { usePager } from '@/hooks/usePager';
import Comic from "../Comic/Comic";
import { FilterForm } from "../Filter/Index";
import { MobileFilterBar } from "../MobileFilter/MobileFilter";
import { Favorites } from '../Favorites/Favorites';
import  { Pager }  from "../Pager/Pager";
import styles from "@/styles/IndexPage.module.css";

export default function ComicsIndex() {
    const { isLoading, data, serverError, total, fetchData} = fetchComicsData();
	const { filter, setFilter } = useAppContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, end, pageDisplay] = usePager(total, currentPage);
    const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
    const nextPage = () => end !== total && setCurrentPage(currentPage + 1);

    useEffect( () => {
        fetchData(currentPage, filter)
	}, [currentPage, filter]);

    return (
        <div className={styles.indexContainer}>
            { isLoading ? (
                    <div>Loading...</div>
            ) : serverError ? (
                <div> Error fetching comics</div>
            ) : (
                <div>
                    <MobileFilterBar />
                    <div className={styles.comicsHideMobile}>
                        <FilterForm/>
                    </div>
                        <ul className={styles.comicsList}>
                            {data?.results?.map(( comic : ComicData) => {
                                return (
                                    <Comic key ={comic.id} comicData={comic}/>
                                )
                            })}
                        </ul>
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

