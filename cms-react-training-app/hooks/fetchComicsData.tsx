import { useState, useEffect } from "react";
import md5 from 'md5';

const fetchComicsData = () => {
    const [isLoading, setIsLoading]  = useState<boolean | null>(null) ;
    const [data, setData] = useState<any | null>(null);
    const [serverError, setServerError] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);
    // const [filter, setFilter] = useState<[]>([]);

    const baseUrl = `https://gateway.marvel.com/v1/public/`;
    const publicKey = `${process.env.apiKeyPublic}`;
    const privateKey = `${process.env.apiKeyPrivate}`;
    const timeStamp =  Date.now();
    const hashValue = md5(timeStamp + privateKey + publicKey);
    const fetchUrlInitial = `${baseUrl}/comics?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}&limit=15`;

        const fetchData = async (pageOffset : number, filter : any) => {
            setServerError(false);
            setIsLoading(true);
            console.log("filter", filter);

            let fetchUrl = "";

            if (filter.length > 0) {
                fetchUrl = `${baseUrl}${filter[0]}/${filter[1]}/comics?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}&limit=15`;
            } else {
                fetchUrl = `${fetchUrlInitial}&offset=${pageOffset * 15}`;
            }

            try {
                const results = await fetch(fetchUrl)
                    .then(res => res.json())
                    .then(res => {
                        if (!res.status === 'Ok') {
                            setServerError(true);
                            setIsLoading(false);
                            return;
                        }
                        setData(res.data);
                        setIsLoading(false);
                        setTotal(res.data.total)
                    })

            } catch (error) {
                setServerError(true);
                setIsLoading(false);
            }
        };
    return { isLoading, data, serverError, total, limit, fetchData, fetchUrlInitial};
}

export default fetchComicsData;