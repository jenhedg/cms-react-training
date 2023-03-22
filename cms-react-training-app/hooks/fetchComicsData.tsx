import { useState, useEffect } from "react";
import md5 from 'md5';

const fetchComicsData = () => {
    const [isLoading, setIsLoading]  = useState<boolean | null>(null) ;
    const [data, setData] = useState<any | null>(null);
    const [serverError, setServerError] = useState<any>(false);
    const [total, setTotal] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);

    const baseUrl = `https://gateway.marvel.com/v1/public/comics`;
    const publicKey = `${process.env.apiKeyPublic}`;
    const privateKey = `${process.env.apiKeyPrivate}`;
    const timeStamp =  Date.now();
    const hashValue = md5(timeStamp + privateKey + publicKey);
    const fetchUrl = `${baseUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}&limit=15&offset=45`;


        const fetchData = async (pageOffset : number) => {
            setIsLoading(true);
            console.log("fetchData()");

            try {
                const results = await fetch(`${fetchUrl}&offset=${pageOffset * 15}`)
                .then(res => res.json())
                .then(res => res.data)

                setData(data);
                setIsLoading(false);
                setTotal(data.total)
            } catch (error) {
                setServerError(true);
                setIsLoading(false);
            }
        };
    return { isLoading, data, serverError, fetchUrl, total, limit, fetchData};
}

export default fetchComicsData;