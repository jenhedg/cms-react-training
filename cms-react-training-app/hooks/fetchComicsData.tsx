import { useState, useEffect } from "react";
import md5 from 'md5';

const fetchComicsData = () => {
    const [isLoading, setIsLoading]  = useState<boolean | null>(null) ;
    const [data, setData] = useState<any | null>(null);
    const [serverError, setServerError] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);

    const baseUrl = `https://gateway.marvel.com/v1/public/comics`;
    const publicKey = `${process.env.apiKeyPublic}`;
    const privateKey = `${process.env.apiKeyPrivate}`;
    const timeStamp =  Date.now();
    const hashValue = md5(timeStamp + privateKey + publicKey);
    const fetchUrl = `${baseUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}&limit=15`;


        const fetchData = async (pageOffset : number) => {
            setServerError(false);
            setIsLoading(true);
            console.log('pageOffset', pageOffset);

            try {
                console.log(fetchUrl);
                const results = await fetch(`${fetchUrl}&offset=${pageOffset * 15}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log('sucess', res);
                        if (!res.status === 'Ok') {
                            setServerError(true);
                            setIsLoading(false);
                            return;
                        }
                        console.log('data', res.data)
                        setData(res.data);
                        setIsLoading(false);
                        setTotal(res.data.total)
                    })

            } catch (error) {
                console.log('server error', error);
                setServerError(true);
                setIsLoading(false);
            }
        };
    return { isLoading, data, serverError, total, limit, fetchData};
}

export default fetchComicsData;