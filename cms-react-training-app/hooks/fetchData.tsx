import { useState, useEffect, useCallback } from "react";

export default function fetchData(url) {

    const baseUrl = `https://gateway.marvel.com/v1/public/comics`;
    const publicKey = ${process.env.apiKeyPublic};
    console.log(baseUrl);

	// const [data, setData] = useState({});
	// const [status, setStatus] = useState("loading");

	// const getData = useCallback(async () => {
	// 	try {
	// 		setStatus("loading");
	// 		const res = await fetch(url);
	// 		const data = await res.json();
	// 		if (data.status === "Ok") {
	// 			setData(data.data);
	// 			setStatus("success");
	// 			return;
	// 		}
	// 		setStatus("error");
	// 	} catch (e) {
	// 		console.error(e);
	// 		setData({});
	// 		setStatus("error");
	// 	}
	// }, [url]);

	// useEffect(() => {
	// 	getData();
	// }, []);

	// return { data, status };
}