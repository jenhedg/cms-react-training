import { useState, useEffect } from "react";
import md5 from 'md5';

const fetchComicsData = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);
    const [serverError, setServerError] = useState(null);

    const baseUrl = `https://gateway.marvel.com/v1/public/comics`;
    const publicKey = `${process.env.apiKeyPublic}`;
    const privateKey = `${process.env.apiKeyPrivate}`;
    const timeStamp =  Date.now();
    const hashValue = md5(timeStamp + privateKey + publicKey);
    // const url = `${baseUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}`;

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const results = await fetch(
                    `${baseUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashValue}`
                ).then(res => res.json()).then(res => res.data).then(res => res.results);
                setData(results);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    },[]);
    console.log(data)
    return { isLoading, data, serverError };
}

export default fetchComicsData;