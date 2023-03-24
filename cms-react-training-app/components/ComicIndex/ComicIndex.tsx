
import { useState, useEffect } from 'react'
import { ComicData } from "../../types/shared_types";
import fetchComicsData from "@/hooks/fetchComicsData";
import { useAppContext } from "state/AppContext";
import { usePager } from '@/hooks/usePager';
import Comic from "../Comic/Comic";
import { FilterForm } from "../Filter/Index";
import { MobileFilterBar } from "../MobileFilter/MobileFilter";
import  { Pager }  from "../Pager/Pager";
import Image from "next/image";
import loader from "assets/preloader.gif";
import styles from "@/styles/IndexPage.module.css";

export default function ComicsIndex() {
    const { isLoading, data, serverError, total, fetchData} = fetchComicsData();
	const { filter, setFilter } = useAppContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, end, pageDisplay] = usePager(total, currentPage);
    const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
    const nextPage = () => end !== total && setCurrentPage(currentPage + 1);

    useEffect( () => {
        fetchData(currentPage, filter);
        // if(filter[0] !== undefined  || filter[1] !== undefined) {
        //     console.log("currpager", currentPage);
        //     console.log("filter", filter[0], filter[1]);
        //     currentPage === 1
        // }
	}, [currentPage, filter, setCurrentPage]);

    return (
        <div className={styles.indexContainer}>
            { isLoading ? (
                <div className={styles.gridFallback}>
                    <div className={styles.loaderCont}>
                    <Image
                            src={loader}
                            alt="Loading..."
                            width={300}
						    height={250}
                            className={styles.loaderImg}
                        />
                        <div className={styles.loader}>Loading...</div>
                    </div>
                </div>
            ) : serverError ? (
                <div className={styles.gridFallback}>
                    <div className={styles.loaderCont}>
                        <div className={styles.loader}> Error fetching comics</div>
                    </div>
                </div>
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

