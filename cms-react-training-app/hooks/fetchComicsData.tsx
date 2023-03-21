import { useState, useEffect } from "react";
import md5 from 'md5';




const fetchComicsData = () => {
    const [isLoading, setIsLoading]  = useState<boolean | null>(null) ;
    const [data, setData] = useState<any | null>(null);
    const [serverError, setServerError] = useState<any>(null);
    const [total, setTotal] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);


    const baseUrl = `https://gateway.marvel.com/v1/public/comics`;
    const publicKey = `${process.env.apiKeyPublic}`;
    const privateKey = `${process.env.apiKeyPrivate}`;
    const timeStamp =  Date.now();
    const hashValue = md5(timeStamp + privateKey + publicKey);
    const fetchUrl = `${baseUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}`;

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const results = await fetch(`${fetchUrl}`)
                .then(res => res.json())
                .then(res => res.data)
                .then(res => res.results);

                setData(results);
                setIsLoading(false);
                setTotal(Object.keys(results).length)
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    },[]);
    return { isLoading, data, serverError, fetchUrl, total, limit};
}

export default fetchComicsData;