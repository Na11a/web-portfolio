"use client"

import { useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import selectedCurrencyContext from "./store/selectedCurrencyContext";
import currencyListContext from "./store/currencyListContext";
import "./Style/styles.scss";

const Page = ({ children }) => {
	const selectedCurrencyCTX = useContext(
		selectedCurrencyContext
	);
	const currencyListCTX = useContext(
		currencyListContext
	);

	useEffect(() => {
    console.log(currencyListCTX)
    console.log(selectedCurrencyCTX)
		currencyListCTX.getCurrencyList();
		currencyListCTX.getExchanges();
		selectedCurrencyCTX.getHistory("bitcoin");
	}, []);
	return (
			<div className="App">
				<Sidebar />
				{ children }
			</div>
	);
}

export default Page;
